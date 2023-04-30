import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { gatewayURL } from '../gateway';

const PostDelete = ({ post }) => {
    const deletePost = () => {
        return axios.delete(`${gatewayURL}/posts/${post?.id}`);
    };
    return (
        <span
            className="hover:text-red-700 cursor-pointer transition-all"
            onClick={deletePost}
        >
            {<AiOutlineDelete />}
        </span>
    );
};

export default PostDelete;
