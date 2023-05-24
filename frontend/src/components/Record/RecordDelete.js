import { AiOutlineDelete } from "react-icons/ai";
import useLibraryContext from "../../hooks/use-library-context";

const RecordDelete = ({ post }) => {
    const { deletePost } = useLibraryContext();

    const deletePostById = () => {
        deletePost(post._id);
    };
    return (
        <span
            className="hover:text-red-700 cursor-pointer transition-all text-[20px]"
            onClick={deletePostById}
        >
            {<AiOutlineDelete />}
        </span>
    );
};

export default RecordDelete;
