import { useState } from 'react';
import axios from 'axios';
import { AiOutlinePlus } from 'react-icons/ai';

const PostCreate = () => {
    const [title, setTitle] = useState('');
    const [isCreate, setIsCreate] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setTitle('');
        axios.post('http://localhost:3001/posts', {
            id: Math.round(Math.random() * 9999),
            title: title,
        });
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
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
