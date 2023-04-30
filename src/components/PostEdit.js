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
                className="p-2 rounded-l-[10px] w-full"
                type="text"
                required
                defaultValue={title}
                onChange={handleChange}
            />
            <button className="bg-green-500 text-white p-2 rounded-r-[10px]">
                Save
            </button>
        </form>
    );
};

export default PostEdit;
