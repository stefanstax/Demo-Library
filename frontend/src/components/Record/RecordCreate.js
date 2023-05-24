import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useLibraryContext from "../../hooks/use-library-context";
import { recordtypes } from "../../context/recordtypes";
import RecordType from "./RecordType";
import { Grid, Box } from "@mui/material";
import CreatePodcast from "../../pages/Podcast/CreatePodcast";
import CreateSong from "../../pages/Songs/CreateSong";
import CreateMovie from "../../pages/Movies/CreateMovie";

const RecordCreate = () => {
    const { createPost } = useLibraryContext();
    const [recordType, setRecordType] = useState("");
    const [isCreate, setIsCreate] = useState(false);

    const handleRecordType = (recordType) => {
        setRecordType(recordType);
    };

    return (
        <Grid
            item
            xs={12}
            md={4}
            lg={3}
            className="flex justify-center items-center bg-[#C7F86080] hover:bg-[#C7F860] transition-all rounded-[7.5px] drop-shadow-2xl p-4 min-h-[200px] cursor-pointer"
            onClick={() => setIsCreate(true)}
        >
            {isCreate ? (
                <Box
                    component="div"
                    className="flex justify-center items-center flex-col gap-[10px] w-full"
                >
                    <RecordType
                        recordtypes={recordtypes}
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
                </Box>
            ) : (
                <AiOutlinePlus fontSize={40} />
            )}
        </Grid>
    );
};

export default RecordCreate;
