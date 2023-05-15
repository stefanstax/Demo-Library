import { AiOutlineDelete } from 'react-icons/ai';
import useLibraryContext from '../../hooks/use-library-context';

const PostDelete = ({ post }) => {
    const { deletePost } = useLibraryContext();

    const deletePostById = () => {
        deletePost(post.id);
    };
    return (
        <span
            className="hover:text-red-700 cursor-pointer transition-all"
            onClick={deletePostById}
        >
            {<AiOutlineDelete />}
        </span>
    );
};

export default PostDelete;
