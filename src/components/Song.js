import React from 'react';
import PostCategory from './Record/PostCategory';
import classNames from 'classnames';

const Song = ({
    handleCategory,
    genres,
    handleAuthor,
    handleChange,
    onSubmit,
}) => {
    const borderClasses = classNames(
        `border-solid border-[1px] border-[#171717]`
    );
    return (
        <>
            <h4 className="w-full text-2xl font-black">Create a new song</h4>
            <form
                onSubmit={onSubmit}
                className="flex justify-center items-start flex-col gap-[10px] w-full"
            >
                <label>Title</label>
                <input
                    className={`p-2 w-full placeholder:text-sm placeholder:text-slate-600 bg-transparent ${borderClasses}`}
                    type="text"
                    required
                    placeholder="Song name..."
                    onChange={handleChange}
                />
                <label>Author</label>
                <input
                    className={`p-2 w-full placeholder:text-sm placeholder:text-slate-600 bg-transparent ${borderClasses}`}
                    type="text"
                    required
                    placeholder="Author's name..."
                    onChange={handleAuthor}
                />
                <label>Genre</label>
                <PostCategory genres={genres} onSelect={handleCategory} />
                <button
                    className={`w-full p-2 hover:bg-[#171717] hover:text-white transition-all ${borderClasses}`}
                >
                    Add song
                </button>
            </form>
        </>
    );
};

export default Song;
