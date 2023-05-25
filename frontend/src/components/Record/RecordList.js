import React, { useEffect } from "react";
import useLibraryContext from "../../hooks/use-library-context";
import PostShow from "./RecordShow";
import PostCreate from "./RecordCreate";
import { Typography, Grid } from "@mui/material";

const RecordList = () => {
    const { fetchPosts, posts } = useLibraryContext();

    useEffect(() => {
        fetchPosts();
    }, []);

    const displayPosts = posts.map((post) => {
        return <PostShow post={post} key={post.id} />;
    });

    return (
        // todo Make a Grid component - allow ...rest with classes
        <>
            <Typography
                component="h1"
                fontSize={60}
                fontWeight={900}
                color={"white"}
                textTransform={"uppercase"}
                className="underline"
                mb={8}
            >
                List of all records
            </Typography>
            <Grid container gap={5} className="flex justify-start items-start">
                {displayPosts}
                <PostCreate />
            </Grid>
        </>
    );
};

export default RecordList;
