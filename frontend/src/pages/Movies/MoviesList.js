import Movie from '../../components/Movie';
import RecordShow from '../../components/Record/RecordShow';
import useLibraryContext from '../../hooks/use-library-context';
import { Box, Container, Grid } from '@mui/material';

const MoviesList = () => {
    const { movies, comments, createPost } = useLibraryContext();

    const allMovies = movies.map((post) => {
        const filteredComments = comments.filter(
            (comment) => comment.postId === post.id
        );

        return (
            <RecordShow post={post} comments={filteredComments} key={post.id} />
        );
    });

    return (
        // todo Make a Grid component - allow ...rest with classes
        <>
            <Grid container gap={5}>
                {allMovies}
                <Grid
                    item
                    xs={12}
                    md={4}
                    lg={3}
                    className="flex justify-center items-center bg-[#C7F86080] hover:bg-[#C7F860] transition-all rounded-[7.5px] drop-shadow-2xl p-4 min-h-[200px] cursor-pointer"
                >
                    <Box className="flex justify-center items-center flex-col gap-[10px] w-full">
                        <Movie createPost={createPost} />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default MoviesList;
