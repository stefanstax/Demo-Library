import React, { useEffect } from 'react';
import ArticleList from './components/PostList';
import useLibraryContext from './hooks/use-library-context';
import Container from './components/Container';
import Route from './components/Route';
import Menu from './components/Menu';

const App = () => {
    const { fetchPosts, fetchComments } = useLibraryContext();

    useEffect(() => {
        fetchPosts();
        fetchComments();
    }, []);

    return (
        // todo Make a Container component
        <Container main>
            <Menu />
            <Route path="/">
                <ArticleList />
            </Route>
        </Container>
    );
};

export default App;
