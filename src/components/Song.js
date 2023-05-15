import React from 'react';
import PostCategory from './Record/PostCategory';

const Song = ({ handleCategory, genres, title, handleChange, onSubmit }) => {
    return (
        <>
            <h4 className="w-full text-2xl font-black">Create a new song</h4>
            <form
                onSubmit={onSubmit}
                className="flex justify-center items-center flex-col gap-[10px] w-full"
            >
                <input
                    className="p-2 w-full placeholder:text-sm placeholder:text-slate-600"
                    type="text"
                    required
                    placeholder="Song name..."
                    defaultValue={title}
                    onChange={handleChange}
                />
                <PostCategory genres={genres} onSelect={handleCategory} />
                <button className="w-full border-solid border-[1px] border-[#171717] p-2 hover:bg-[#171717] hover:text-white transition-all">
                    Add song
                </button>
            </form>
        </>
    );
};

export default Song;
