import ArticleList from "./components/Record/RecordList";
import Route from "./components/Route";
import Menu from "./components/Menu";
import MembersPage from "./pages/MembersPage";
import MoviesPage from "./pages/Movies/MoviesPage";
import SongsPage from "./pages/Songs/SongsPage";
import RegisterPage from "./pages/RegisterPage";
import { Container } from "@mui/material";
import PodcastPage from "./pages/Podcast/PodcastPage";
import CreateMovieGenre from "./components/CreateMovieGenre";
import CreatePodcastGenre from "./components/CreatePodcastGenre";
import CreateSongGenre from "./components/CreateSongGenre";
import CreateRecordType from "./components/CreateRecordType";

const App = () => {
    return (
        // todo Make a Container component
        <Container
            fluid
            className="py-24 bg-[#171717] min-w-full min-h-[100vh]"
        >
            <Container fluid>
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
                    <CreateMovieGenre />
                    <CreateSongGenre />
                    <CreatePodcastGenre />
                    <CreateRecordType />
                </Route>
            </Container>
        </Container>
    );
};

export default App;
