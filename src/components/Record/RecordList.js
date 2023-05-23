import React, { useEffect } from 'react';
import useLibraryContext from '../../hooks/use-library-context';
import PostShow from './RecordShow';
import PostCreate from './RecordCreate';
import CommentList from '../Comments/CommentList';
import { Container, Typography, Grid } from '@mui/material';

const RecordList = () => {
    const { fetchPosts, posts, comments } = useLibraryContext();

    useEffect(() => {
        fetchPosts();
    }, []);

    const displayPosts = posts.map((post) => {
        const filteredComments = comments.filter(
            (comment) => comment.postId === post.id
        );

        return (
            <PostShow post={post} comments={filteredComments} key={post.id} />
        );
    });

    return (
        // todo Make a Grid component - allow ...rest with classes
        <Container fluid className="mt-24">
            <Grid container gap={5}>
                {displayPosts}
                <PostCreate />
                <Typography variant="h4" className="w-full font-black text-2xl">
                    Comments
                </Typography>
                <CommentList />
            </Grid>
        </Container>
    );
};

export default RecordList;
