import React, {useEffect, useState} from 'react'
import { Container, PostForm } from '../components'
import { tableDBService } from '../appwrite'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

function EditPost() {

    const [post, setPost] = useState(null);
    const {slug} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if(slug){
            tableDBService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post);
                }
            })
        }else{
            navigate('/')
        }
    } , [slug, navigate])

  return post?(
    <div className=' py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ): null
}

export default EditPost