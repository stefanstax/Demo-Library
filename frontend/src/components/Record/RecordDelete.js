import { AiOutlineDelete } from "react-icons/ai";
import useLibraryContext from "../../hooks/use-library-context";
import { Box, Typography } from "@mui/material";

const RecordDelete = ({ post }) => {
    const { deletePost } = useLibraryContext();

    const deletePostById = () => {
        deletePost(post._id);
    };
    return (
        <Box
            onClick={deletePostById}
            className="w-full px-2 flex gap-[10px] justify-center hover:bg-[#C7F860] hover:text-black transition-all cursor-pointer items-center text-white drop-shadow-xl rounded-l-2xl rounded-br-xl"
        >
            <Typography variant="span" className="text-[20px]">
                {<AiOutlineDelete />}
            </Typography>
        </Box>
    );
};

export default RecordDelete;
