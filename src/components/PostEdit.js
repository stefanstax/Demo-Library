import { useState } from 'react';
import useLibraryContext from '../hooks/use-library-context';
import PostCategory from './PostCategory';
import { categories } from '../context/categories';

const PostEdit = ({ post, onSave }) => {
    const { editPost } = useLibraryContext();
    const [title, setTitle] = useState(post.title);

    const [category, setCategory] = useState([]);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editPost(post.id, title, category);
        onSave();
    };

    const handleCategory = (event) => {
        setCategory(event);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center w-full flex-col gap-[10px]"
        >
            <input
                className="w-full bg-transparent px-2 py-1 border font-black border-solid border-[1px] border-[#171717]"
                type="text"
                required
                defaultValue={title}
                onChange={handleChange}
            />
            <PostCategory
                categories={categories}
                onSelect={handleCategory}
                postCategory={post?.movieCategory}
            />
            <button className="text-[#171717] w-full px-2 py-1 border border-solid border-[1px] border-[#171717] hover:bg-[#171717] hover:text-white transition-all">
                Update
            </button>
        </form>
    );
};

export default PostEdit;
