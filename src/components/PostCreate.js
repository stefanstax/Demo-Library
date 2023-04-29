import { useState } from 'react';
import axios from 'axios';
import { AiOutlinePlus } from 'react-icons/ai';

const PostCreate = () => {
    const [title, setTitle] = useState('');
    const [isCreate, setIsCreate] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setTitle('');
        await axios.post('http://localhost:3001/posts', {
            id: Math.round(Math.random() * 9999),
            title: title,
        });
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="flex justify-center items-center w-[30%] bg-slate-900 rounded-[10px] drop-shadow-2xl p-2 min-h-[200px]">
            {isCreate ? (
                <div className="flex justify-center items-center flex-col gap-[10px] w-full">
                    <h4 className="w-full text-2xl font-black text-white">
                        Create a new movie
                    </h4>
                    <form
                        onSubmit={onSubmit}
                        className="flex justify-center items-center flex-col gap-[10px] w-full"
                    >
                        <input
                            className="p-2 rounded-[10px] w-full"
                            type="text"
                            required
                            placeholder="Movie name..."
                            defaultValue={title}
                            onChange={handleChange}
                        />
                        <button className="w-full bg-green-500 text-white p-2 rounded-[10px]">
                            Add Movie
                        </button>
                    </form>
                </div>
            ) : (
                <AiOutlinePlus
                    fontSize={40}
                    color="white"
                    className="cursor-pointer"
                    onClick={() => setIsCreate(true)}
                />
            )}
        </div>
    );
};

export default PostCreate;
