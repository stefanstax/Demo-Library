import useLibraryContext from '../../hooks/use-library-context';
import { useState } from 'react';

const CreateComment = ({ post }) => {
    const [title, setTitle] = useState('');
    const { createComment } = useLibraryContext();
    let postId = post?.id;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setTitle('');
        createComment(title, postId);
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
                className="w-full bg-transparent px-2 placeholder:text-slate-600 placeholder:text-xs py-1 border border-solid border-[1px] border-[#171717] border-r-[0px]"
                type="text"
                required
                placeholder={`I think that ${post?.title}...`}
                defaultValue={title}
                onChange={handleChange}
            />
            <button className="text-[#171717] px-2 py-1 border border-solid border-[1px] border-[#171717] hover:bg-[#171717] hover:text-white transition-all">
                Comment
            </button>
        </form>
    );
};

export default CreateComment;

// TODO Include inside of a PostShow as a field
// TODO Include dynamic way of patching posts
// TODO Include a component to edit comments
