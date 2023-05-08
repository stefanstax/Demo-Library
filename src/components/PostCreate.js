import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import useLibraryContext from '../hooks/use-library-context';
import PostCategory from './PostCategory';
import { categories } from '../context/categories';

const PostCreate = () => {
    const { createPost } = useLibraryContext();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState([]);
    const [isCreate, setIsCreate] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        createPost(title, category);
        setTitle('');
        setIsCreate(false);
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleCategory = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    return (
        <div className="flex justify-center items-center w-[48%] md:w-[30%] bg-[#C7F86080] rounded-[7.5px] drop-shadow-2xl p-2 min-h-[200px]">
            {isCreate ? (
                <div className="flex justify-center items-center flex-col gap-[10px] w-full">
                    <h4 className="w-full text-2xl font-black">
                        Create a new movie
                    </h4>
                    <form
                        onSubmit={onSubmit}
                        className="flex justify-center items-center flex-col gap-[10px] w-full"
                    >
                        <input
                            className="p-2 w-full placeholder:text-sm placeholder:text-slate-600"
                            type="text"
                            required
                            placeholder="Movie name..."
                            defaultValue={title}
                            onChange={handleChange}
                        />
                        <PostCategory
                            categories={categories}
                            onSelect={handleCategory}
                        />
                        <button className="w-full border-solid border-[1px] border-[#171717] p-2 hover:bg-[#171717] hover:text-white transition-all">
                            Add Movie
                        </button>
                    </form>
                </div>
            ) : (
                <AiOutlinePlus
                    fontSize={40}
                    className="cursor-pointer"
                    onClick={() => setIsCreate(true)}
                />
            )}
        </div>
    );
};

export default PostCreate;
