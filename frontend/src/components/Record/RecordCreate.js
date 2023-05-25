import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useLibraryContext from "../../hooks/use-library-context";
import RecordType from "./RecordType";
import { Grid, Box, Typography } from "@mui/material";
import CreatePodcast from "../../pages/Podcast/CreatePodcast";
import CreateSong from "../../pages/Songs/CreateSong";
import CreateMovie from "../../pages/Movies/CreateMovie";

const RecordCreate = () => {
    const { createPost, recordTypes, fetchRecordTypes } = useLibraryContext();
    const [recordType, setRecordType] = useState("");
    const [isCreate, setIsCreate] = useState(false);
    const handleRecordType = (recordType) => {
        setRecordType(recordType);
    };

    useEffect(() => {
        fetchRecordTypes();
    }, []);

    return (
        <Grid
            item
            xs={12}
            md={3}
            lg={2}
            className="flex justify-center items-center bg-[#303030] hover:bg-[#212121] transition-all rounded-[7.5px] drop-shadow-2xl text-white p-4 min-h-[200px] cursor-pointer"
            onClick={() => setIsCreate(true)}
        >
            {isCreate ? (
                <Box
                    component="div"
                    className="flex justify-center items-center flex-col gap-[10px] w-full"
                >
                    <RecordType
                        recordtypes={recordTypes}
                        onSelect={handleRecordType}
                    />

                    {recordType === "movie" && (
                        <CreateMovie createPost={createPost} />
                    )}

                    {recordType === "song" && (
                        <CreateSong createPost={createPost} />
                    )}
                    {recordType === "podcast" && (
                        <CreatePodcast createPost={createPost} />
                    )}
                    {recordType === "series" && (
                        <Typography component="h4">Coming soon!</Typography>
                    )}
                </Box>
            ) : (
                <AiOutlinePlus fontSize={40} />
            )}
        </Grid>
    );
};

export default RecordCreate;
