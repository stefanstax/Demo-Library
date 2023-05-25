import { useEffect } from "react";
import { Typography } from "@mui/material";
import useLibraryContext from "../../hooks/use-library-context";
import SongsList from "./SongsList";

const MoviesPage = () => {
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
                color={"white"}
            >
                List of all songs
            </Typography>
            <SongsList />
        </>
    );
};

export default MoviesPage;
