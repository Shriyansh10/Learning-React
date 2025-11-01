import React from 'react'
import { tableDBService, storageService } from '../appwrite'
import {Link} from 'react-router'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/posts/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className="w-full justify-center mb-4">
          <img src={storageService.previewFile(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard