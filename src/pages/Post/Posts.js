import React from 'react';
import PostCard from './PostCard';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
    query PostData{
        posts {
        title
        content
        createdAt
        author {
            name
            email
        }
        }
    }
`;

const Posts = () => {
    const { loading, error, data } = useQuery(GET_POSTS)
    // console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    // console.log(data.posts);

    return (
        <div>
            <h1 className='text-center font-bold text-5xl my-4 pb-4'>Posts</h1>
            <hr />
            <div className=' flex float-wrap'>
            {
                data.posts.map((post, index) => <PostCard key={index} post={post}></PostCard>)
            }
            </div>
        </div>
    );
};

export default Posts;