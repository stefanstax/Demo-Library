import React, { useEffect } from 'react';
import ArticleList from './components/Record/RecordList';
import useLibraryContext from './hooks/use-library-context';
import Container from './components/Container';
import Route from './components/Route';
import Menu from './components/Menu';
import MembersPage from './pages/MembersPage';
import MoviesPage from './pages/Movies/MoviesPage';
import MusicPage from './pages/Songs/MusicPage';
import RegisterPage from './pages/RegisterPage';

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
            <Route path="/members">
                <MembersPage />
            </Route>
            <Route path="/movies">
                <MoviesPage />
            </Route>
            <Route path="/music">
                <MusicPage />
            </Route>
            <Route path="/register">
                <RegisterPage />
            </Route>
        </Container>
    );
};

export default App;
