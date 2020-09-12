import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

const PostDetails = (props) => {
    const classes = useStyles();
    const {title, id} = props.post
    return (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Title: {title}
            </Typography>
            <Typography variant="body2" component="p">
            </Typography>
          </CardContent>
          <Link to = {`/InDetail/${id}`}>
            <Button size="small" variant="contained" color="secondary">See Details</Button>
          </Link>
      </Card>
    );
};

export default PostDetails;