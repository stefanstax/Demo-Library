import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import RecordEdit from "./RecordEdit";
import PostPhoto from "./RecordPhoto";
import RecordDelete from "./RecordDelete";

const RecordShow = ({ post, comments }) => {
    const [isEdit, setIsEdit] = useState(false);

    const disableSave = () => {
        setIsEdit(false);
    };

    return (
        <Grid
            item
            xs={12}
            md={3}
            lg={2}
            className="my-12 bg-[#30303080] text-white drop-shadow-2xl flex flex-wrap justify-start items-between rounded-xl"
        >
            <PostPhoto post={post} />
            {/* Post Delete */}
            <Box className="w-full flex flex-col justify-start items-start p-6 min-h-[200px]">
                {isEdit ? (
                    <RecordEdit post={post} onSave={disableSave} />
                ) : (
                    <>
                        <Box
                            component="span"
                            className="border border-[1px] border-gray-400 text-gray-400 flex gap-[5px] text-white w-fit px-2 py-1 rounded drop-shadow-lg mb-2"
                        >
                            <Typography variant="span" fontSize={14}>
                                {post?.recordType} |
                            </Typography>
                            <Typography variant="span" fontSize={14}>
                                {post?.genre}
                            </Typography>
                        </Box>
                        <Typography
                            variant="h4"
                            fontSize={16}
                            fontWeight={900}
                            className="truncate w-full"
                            my={2}
                        >
                            {post?.title}
                        </Typography>
                        <Box
                            component="div"
                            className="flex flex-wrap gap-[5px]"
                        >
                            {post?.author && (
                                <Typography
                                    variant="span"
                                    fontSize={14}
                                    color={"393939"}
                                >
                                    {post?.author}
                                </Typography>
                            )}
                        </Box>
                    </>
                )}
            </Box>
            <Box className="w-full flex nowrap justify-center items-stretch border border-[1px] border-[#C7F860] rounded-b-xl">
                <Box
                    component="button"
                    className="w-full max-h-[50px] rounded-b p-3 hover:bg-[#C7F860] font-black uppercase hover:text-black transition-all rounded-r-2xl rounded-bl-xl"
                    onClick={() => setIsEdit(!isEdit)}
                >
                    {!isEdit && "Edit"}
                    {isEdit && "Cancel"}
                </Box>

                <RecordDelete post={post} />
            </Box>
        </Grid>
    );
};

export default RecordShow;
