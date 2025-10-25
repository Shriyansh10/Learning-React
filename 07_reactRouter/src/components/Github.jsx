import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState("");
    
    // useEffect(() => {
      
    //     fetch('https://api.github.com/users/Shriyansh10')
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    //     .catch((e)=> console.log(e.message))
        
    // }, [])

    return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
    </>
  )
}

export default Github

const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Shriyansh10');
    return response.json()
}

export {githubInfoLoader}