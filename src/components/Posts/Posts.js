import React,  { useEffect, useState} from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Posts = () => {   
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts.map(post => <PostDetails
                post = {post}
                key = {post.id}></PostDetails>)
            }
        </div>
    );
};

export default Posts;