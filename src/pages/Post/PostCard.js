import React, { useEffect, useState } from 'react';
import './PostCard.css'

const PostCard = ({post}) => {
    // console.log(post);
    // JS Date formatted to normal Date start ------------------------
    const [formattedDate, setFormattedDate] = useState("")
    useEffect(()=>{
        if(post.createdAt){
            let date = post.createdAt;
            date /= 1000;
            const dateInstance = new Date(date);
            // console.log(dateInstance.getFullYear());
            setFormattedDate(`${dateInstance.getDate()}-${dateInstance.getMonth()+1}-${dateInstance.getFullYear()}`)
        }
    },[post])
    // console.log(formattedDate);
    // JS Date formatted to normal Date End ------------------------
    return (
        <div className='border w-96 m-4 p-4 rounded-md border-black-400'>
            <h3 className='text-lg font-bold'>This is post Title</h3>
            <div className='text-state-500 text-sm text-gray-700 flex justify-between py-2'>
                <p>Author Name: {post.author.name}</p>
                {/* <p>Date: {post.createdAt}</p> */}
                <p>Date: {formattedDate}</p>
            </div>
            <p className='text-sm'>This is Content:  {post.author.content}</p>
        </div>
    );
};

export default PostCard;