import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../";
import { storageService, tableDBService } from "../../appwrite";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title ? post.title : "",
        slug: post?.slug ? post.slug : "",
        content: post?.content ? post.content : "",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.authSliceReducer.user);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? storageService.uploadFile(data.image[0])
        : null;
      if (file) {
        storageService.deleteFile(post.featuredImage);
      }
      const dbPost = await tableDBService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost}`);
      }
    } else {
      // todo check functionality like line 22
      const file = await storageService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await tableDBService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d]+/g, "-")
        .replace(/[\s]/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("rowId", slugTransform(value.title, { shouldValidate: true }));
      }
    });
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input 
                title = "Title: "
                placeholder = "Title "
                className = 'mb-4'
                {...register('title', {required: true})}
            ></Input>
            <Input
                label= 'Slug: '
                placeholder= 'Slug'
                className = 'mb-4'
                {...register('slug', {required: true})}
                onInput = {(e) => {
                    setValue('slug', slugTransform(e.currentTarget.value), {shouldValidate:true})
                }}
            ></Input>
            <RTE label='Content :' name='content' control={control} defaultValue={getValues('content')}/>
        </div>
        <div className="w-1/3 px-2">
                <Input 
                    label='Featured Image: ' 
                    type='file'
                    className='mb-4'
                    accept = 'image/*'
                    {...register('image', {required: !post})}
                ></Input>
                {post && (<div className="w-full mb-4">
                    <img 
                        src={storageService.getFilePreviewURL(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                    />
                </div>)}
                <Select 
                    options={['active', 'inactive']}
                    label='Status: '
                    className='mb-4'
                    {...register('status', {required: true})}
                ></Select>
                <Button type='submit' bgColor={post ? 'bg-green-500' : undefined} 
                className='w-full'>
                    {post ? 'Update Post' : 'Create Post'}
                </Button>   
        </div>
    </form>
  );
}

export default PostForm;
