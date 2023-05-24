import { useEffect } from "react";
import { Typography } from "@mui/material";
import useLibraryContext from "../../hooks/use-library-context";
import PodcastList from "./PodcastList";

const PodcastPage = () => {
    const { fetchPosts } = useLibraryContext();

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <Typography
                component="h1"
                fontSize={60}
                fontWeight={900}
                textTransform={"uppercase"}
                className="underline"
                mb={8}
            >
                List of all podcasts
            </Typography>
            <PodcastList />
        </>
    );
};

export default PodcastPage;
