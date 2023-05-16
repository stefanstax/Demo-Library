import { useState } from 'react';
import useLibraryContext from '../../hooks/use-library-context';
import PostCategory from './PostCategory';
import { categories } from '../../context/categories';
import { genres } from '../../context/genres';

const PostEdit = ({ post, onSave }) => {
    const { editPost } = useLibraryContext();
    const [title, setTitle] = useState(post.title);
    const [author, setAuthor] = useState(post.author);

    const [category, setCategory] = useState(post?.genre);
    const [recordType, setRecordType] = useState(post?.recordType);

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editPost(post.id, title, category, recordType, author);
        onSave();
    };

    // todo Check - not reading well - works on second trigger of the select
    const handleCategory = (value) => {
        setCategory(value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex justify-center items-start w-full flex-col gap-[10px] mt-8"
        >
            <label>Author</label>
            <input
                className="w-full bg-transparent px-2 py-1 border font-black border-solid border-[1px] border-[#171717]"
                type="text"
                required
                defaultValue={author}
                onChange={handleAuthor}
            />
            <label>Title</label>
            <input
                className="w-full bg-transparent px-2 py-1 border font-black border-solid border-[1px] border-[#171717]"
                type="text"
                required
                defaultValue={title}
                onChange={handleTitle}
            />
            {/* // TODO FIND A BETTER WAY - REPETETIVE */}
            <label>Genre</label>
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
            <button className="text-[#171717] w-fit px-2 py-1 border border-solid border-[1px] border-[#171717] hover:bg-[#171717] hover:text-white transition-all">
                Update
            </button>
        </form>
    );
};

export default PostEdit;
