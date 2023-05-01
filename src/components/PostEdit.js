import axios from 'axios';
import { useState } from 'react';
import { gatewayURL } from '../gateway';
import _ from 'lodash';

const PostEdit = ({ post }) => {
    let title = post?.title;
    const [input, setInput] = useState(title);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const updatePost = () => {
        return axios.patch(`${gatewayURL}/posts/${post?.id}`, {
            title: input,
        });
    };
    // * Cache the result if same data is being sent
    const memoizeUpdatePost = _.memoize(updatePost);

    return (
        <form
            onSubmit={memoizeUpdatePost}
            className="flex justify-center items-center w-full"
        >
            <input
                className="w-full bg-transparent px-2 py-1 border font-black border-solid border-[1px] border-[#171717] border-r-[0px]"
                type="text"
                required
                defaultValue={title}
                onChange={handleChange}
            />
            <button className="text-[#171717] px-2 py-1 border border-solid border-[1px] border-[#171717] hover:bg-[#171717] hover:text-white transition-all">
                Update
            </button>
        </form>
    );
};

export default PostEdit;
