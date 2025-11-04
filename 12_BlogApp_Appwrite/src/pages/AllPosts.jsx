import React, {useState, useEffect} from 'react'
import { tableDBService } from '../appwrite'
import { PostCard } from '../components'
import { Container } from '../components';

function AllPosts() {

    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        try{
            tableDBService.listPost([]).then((posts) => {
                if(posts) setPosts(posts.rows)
            })
        }catch(error){
            console.log(error)
        }
    }, [])

  return (
    <div className='w-full-py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => 
                    { return (
                        <div className='p-2 w-1' key={post.$id}>
                            <PostCard post={post}/>
                        </div>
                    )}
                )}
            </div>
        </Container>

    </div>
  )
}

export default AllPosts