import RecordShow from "../../components/Record/RecordShow";
import useLibraryContext from "../../hooks/use-library-context";
import { Box, Grid } from "@mui/material";
import Song from "./CreateSong";

const SongsList = () => {
    const { songs, comments, createPost } = useLibraryContext();

    const allSongs = songs.map((post) => {
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
                {allSongs}
                <Grid
                    item
                    xs={12}
                    md={4}
                    lg={4}
                    className="justify-center items-center bg-[#303030] hover:bg-[#212121] text-white transition-all rounded-[7.5px] drop-shadow-2xl p-4 min-h-[200px] cursor-pointer"
                >
                    <Box className="flex justify-center items-center flex-col gap-[10px] w-full">
                        <Song createPost={createPost} />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SongsList;
