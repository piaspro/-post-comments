import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import AllComments from '../AllComments/AllComments';

const Comment = () => {
    let {Id} = useParams();
    const [Comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${Id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h3>Comments</h3>
            {
                Comments.map(Comment => <AllComments
                Comment = {Comment}
                key = {Comment.id}></AllComments>)
            }
        </div>
    );
};

export default Comment;