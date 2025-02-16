import React from 'react'
import DBService from '../appwrite/dbConfig'
import { Link } from 'react-router-dom'

//for render preview at home page

function PostCard({ $id, title, banner }) {
    console.log("file preview", DBService.getFilePreview(banner));

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={DBService.getFilePreview(banner)} alt={title}
                        className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold' >{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard