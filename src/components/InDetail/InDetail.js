import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import Comment from '../Comments/Comment';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const InDetail = () => {
    const classes = useStyles();
    let {Id} = useParams();
    const [posts, setPosts] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${Id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="body2" component="p">
                        Details About Post :{Id}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Title: {posts.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <strong>Body:</strong> {posts.body}
                    </Typography>
                </CardContent>
            </Card>
            <div>
                <Comment></Comment>
            </div>
        </div>
    );
};

export default InDetail;