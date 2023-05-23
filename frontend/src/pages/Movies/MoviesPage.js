import { useEffect } from 'react';
import MoviesList from './MoviesList';
import { Container, Typography } from '@mui/material';
import useLibraryContext from '../../hooks/use-library-context';

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
                textTransform={'uppercase'}
                className="underline"
                mb={8}
            >
                List of all movies
            </Typography>
            <MoviesList />
        </>
    );
};

export default MoviesPage;
