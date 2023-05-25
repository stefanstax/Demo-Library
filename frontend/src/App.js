import ArticleList from "./components/Record/RecordList";
import Route from "./components/Route";
import Menu from "./components/Menu";
import MembersPage from "./pages/MembersPage";
import MoviesPage from "./pages/Movies/MoviesPage";
import SongsPage from "./pages/Songs/SongsPage";
import RegisterPage from "./pages/RegisterPage";
import { Container } from "@mui/material";
import PodcastPage from "./pages/Podcast/PodcastPage";
import CreateRecordGenre from "./components/CreatePodcastGenre";
import CreateMovieGenre from "./components/CreateMovieGenre";
import CreatePodcastGenre from "./components/CreatePodcastGenre";
import CreateSongGenre from "./components/CreateSongGenre";

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
                <SongsPage />
            </Route>
            <Route path="/podcasts">
                <PodcastPage />
            </Route>
            <Route path="/register">
                <RegisterPage />
            </Route>
            <Route path="/genres">
                <CreatePodcastGenre />
                <CreateMovieGenre />
                <CreateSongGenre />
            </Route>
        </Container>
    );
};

export default App;
