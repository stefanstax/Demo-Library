import React, { useEffect } from 'react';
import Container from '../components/Container';
import useLibraryContext from '../hooks/use-library-context';
import PostList from '../components/Record/RecordList';

const MoviesPage = () => {
    const { posts, fetchPosts } = useLibraryContext();

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Container secondary className={'my-24'}>
            <PostList />
        </Container>
    );
};

export default MoviesPage;
