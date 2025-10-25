import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();

    return (
    <div className='text-center bg-gray-600 p-4 m-4 text-white text-4xl'>User: {userid}</div>
  )
}

export default User