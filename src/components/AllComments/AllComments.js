import React from 'react';

const AllComments = (props) => {
    const {name, body, email} = props.Comment;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export default AllComments;