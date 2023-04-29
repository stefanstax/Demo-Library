import axios from 'axios';
import { gatewayURL } from '../gateway';
import { useState } from 'react';

const CreateComment = ({ post }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`${gatewayURL}/comments`, {
            id: Math.round(Math.random() * 9999),
            title: title,
            postId: post?.id,
        });
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center w-full"
        >
            <input
                className="p-2 rounded-l-[10px] w-full"
                type="text"
                required
                placeholder="Write your comment"
                defaultValue={title}
                onChange={handleChange}
            />
            <button className="bg-green-500 text-white p-2 rounded-r-[10px]">
                Save
            </button>
        </form>
    );
};

export default CreateComment;

// TODO Include inside of a PostShow as a field
// TODO Include dynamic way of patching posts
// TODO Include a component to edit comments
