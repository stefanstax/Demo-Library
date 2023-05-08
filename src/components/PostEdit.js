import { useState } from 'react';
import useLibraryContext from '../hooks/use-library-context';

const PostEdit = ({ post, onSave }) => {
    const { editPost } = useLibraryContext();
    const [title, setTitle] = useState(post.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editPost(post.id, title);
        onSave();
    };

    return (
        <form
            onSubmit={handleSubmit}
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
