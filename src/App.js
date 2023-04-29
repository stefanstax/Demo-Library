import React, { useEffect } from 'react';
import ArticleList from './components/PostList';
import useLibraryContext from './hooks/use-library-context';
import Container from './components/Container';

const App = () => {
    const { fetchPosts, fetchComments } = useLibraryContext();

    useEffect(() => {
        fetchPosts();
        fetchComments();
    }, []);

    return (
        // todo Make a Container component
        <Container main>
            <ArticleList />
        </Container>
    );
};

export default App;
