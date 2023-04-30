import { AiOutlineDelete } from 'react-icons/ai';
import { gatewayURL } from '../gateway';
import axios from 'axios';

const CommentDelete = ({ comment }) => {
    const deleteComment = () => {
        return axios.delete(`${gatewayURL}/comments/${comment?.id}`);
    };
    return (
        <AiOutlineDelete
            color="red"
            fontSize={16}
            onClick={deleteComment}
            className="hover:opacity-[0.6] cursor-pointer"
        />
    );
};

export default CommentDelete;
