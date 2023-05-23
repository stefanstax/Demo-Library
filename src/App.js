import ArticleList from './components/Record/RecordList';
import Route from './components/Route';
import Menu from './components/Menu';
import MembersPage from './pages/MembersPage';
import MoviesPage from './pages/Movies/MoviesPage';
import MusicPage from './pages/Songs/MusicPage';
import RegisterPage from './pages/RegisterPage';
import { Container } from '@mui/material';

const App = () => {
    return (
        // todo Make a Container component
        <Container fluid className="my-24">
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
