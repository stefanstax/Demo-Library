import { AiOutlineDelete } from 'react-icons/ai';
import useLibraryContext from '../../hooks/use-library-context';

const CommentDelete = ({ comment }) => {
    const { deleteComment } = useLibraryContext();

    const deleteCommentById = () => {
        deleteComment(comment?.id);
    };
    return (
        <AiOutlineDelete
            color="red"
            fontSize={16}
            onClick={deleteCommentById}
            className="hover:opacity-[0.6] cursor-pointer"
        />
    );
};

export default CommentDelete;
