import { useState } from 'react';
import useLibraryContext from '../../hooks/use-library-context';
import PostCategory from './PostCategory';
import { categories } from '../../context/categories';
import { genres } from '../../context/genres';

const PostEdit = ({ post, onSave }) => {
    const { editPost } = useLibraryContext();
    const [title, setTitle] = useState(post.title);

    const [category, setCategory] = useState(post?.genre);
    const [recordType, setRecordType] = useState(post?.recordType);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editPost(post.id, title, category, recordType);
        onSave();
    };

    // todo Check - not reading well - works on second trigger of the select
    const handleCategory = (value) => {
        setCategory(value);
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
            {/* // TODO FIND A BETTER WAY - REPETETIVE */}
            {post?.recordType === 'song' && (
                <PostCategory
                    genres={genres}
                    onSelect={handleCategory}
                    postCategory={category}
                />
            )}
            {post?.recordType === 'movie' && (
                <PostCategory
                    categories={categories}
                    onSelect={handleCategory}
                    postCategory={category}
                />
            )}
            <button className="text-[#171717] w-full px-2 py-1 border border-solid border-[1px] border-[#171717] hover:bg-[#171717] hover:text-white transition-all">
                Update
            </button>
        </form>
    );
};

export default PostEdit;
