import { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import RecordEdit from './RecordEdit';
import PostPhoto from './RecordPhoto';
import CreateComment from '../Comments/CommentCreate';

const RecordShow = ({ post, comments }) => {
    const [isEdit, setIsEdit] = useState(false);

    const displayComments = comments.map((comment) => {
        return (
            <Grid item xs={12}>
                <Typography
                    variant="span"
                    key={comment?.id}
                    className="w-full underline"
                >
                    {comment?.title}
                </Typography>
            </Grid>
        );
    });

    const disableSave = () => {
        setIsEdit(false);
    };

    return (
        <Grid
            item
            xs={12}
            md={4}
            lg={3}
            className="my-12 bg-slate-100 flex flex-wrap justify-start items-between"
        >
            <PostPhoto post={post} />
            {/* Post Delete */}
            <Box className="w-full flex flex-col justify-start items-start p-6 min-h-[200px]">
                {isEdit ? (
                    <RecordEdit post={post} onSave={disableSave} />
                ) : (
                    <>
                        <Typography
                            variant="h4"
                            fontSize={18}
                            fontWeight={900}
                            mb={2}
                        >
                            {post?.title}
                        </Typography>
                        <Box
                            component="div"
                            className="flex flex-col gap-[5px] mb-8"
                        >
                            {post?.author && (
                                <Typography
                                    variant="span"
                                    fontSize={14}
                                    fontStyle={'italic'}
                                    color={'393939'}
                                >
                                    by {post?.author}
                                </Typography>
                            )}
                            <Box
                                component="span"
                                className="bg-neutral-200 w-fit px-2 py-1 rounded"
                            >
                                <Typography
                                    variant="span"
                                    fontSize={14}
                                    fontStyle={'italic'}
                                    color={'393939'}
                                >
                                    {post?.genre}
                                </Typography>
                            </Box>
                        </Box>
                    </>
                )}

                {/* Comments */}
                {/* <Grid container gap={2} className="mt-12">
                    <Grid item xs={12}>
                        <Typography variant="h5" className="w-full font-bold">
                            Comments
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="span" className="text-[10px]">
                            {displayComments?.length}{' '}
                            {displayComments?.length > 1 ||
                            displayComments?.length === 0
                                ? 'comments'
                                : 'comment'}
                        </Typography>
                    </Grid>
                    <Grid container item xs={12}>
                        {displayComments?.length ? displayComments : null}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="span">
                            <CreateComment post={post} />
                        </Typography>
                    </Grid>
                </Grid> */}
            </Box>
            <Box
                component="button"
                className="w-full max-h-[50px] rounded-b border border-[1px] border-[#171717] p-3 hover:bg-[#171717] hover:text-white transition-all"
                onClick={() => setIsEdit(!isEdit)}
            >
                {!isEdit && 'Edit'}
                {isEdit && 'Cancel'}
            </Box>
        </Grid>
    );
};

export default RecordShow;
