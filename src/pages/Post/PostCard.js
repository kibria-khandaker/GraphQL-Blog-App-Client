import React from 'react';
import './PostCard.css'

const PostCard = ({post}) => {
    console.log(post);
    return (
        <div className='border w-96 m-4 p-4 rounded-md border-black-400'>
            <h3 className='text-lg font-bold'>This is post Title</h3>
            <div className='text-state-500 text-sm text-gray-700 flex justify-between py-2'>
                <p>Author Name: {post.author.name}</p>
                <p>Date: {post.createdAt}</p>
            </div>
            <p className='text-sm'>This is Content:  {post.author.content}</p>
        </div>
    );
};

export default PostCard;