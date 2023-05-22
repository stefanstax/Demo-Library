import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import useLibraryContext from '../../hooks/use-library-context';
import SongsList from './SongsList';
import Song from '../../components/Song';

const MoviesPage = () => {
    const { fetchPosts } = useLibraryContext();

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Container fluid className="mt-32">
            <Typography
                component="h1"
                fontSize={60}
                fontWeight={900}
                textTransform={'uppercase'}
                className="underline"
                mb={8}
            >
                List of all songs
            </Typography>
            <SongsList />
        </Container>
    );
};

export default MoviesPage;
