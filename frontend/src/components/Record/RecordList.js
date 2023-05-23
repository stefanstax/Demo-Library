import React, { useEffect } from "react";
import useLibraryContext from "../../hooks/use-library-context";
import PostShow from "./RecordShow";
import PostCreate from "./RecordCreate";
import CommentList from "../Comments/CommentList";
import { Typography, Grid } from "@mui/material";

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
        <>
            <Typography
                component="h1"
                fontSize={60}
                fontWeight={900}
                textTransform={"uppercase"}
                className="underline"
                mb={8}
            >
                List of all records
            </Typography>
            <Grid container gap={5}>
                {displayPosts}
                <PostCreate />
                <Typography variant="h4" className="w-full font-black text-2xl">
                    Comments
                </Typography>
                <CommentList />
            </Grid>
        </>
    );
};

export default RecordList;
