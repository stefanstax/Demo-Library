import React from 'react';
import PostCategory from './Record/PostCategory';
import classNames from 'classnames';

const Movie = ({
    handleCategory,
    categories,
    title,
    handleChange,
    onSubmit,
}) => {
    const borderClass = classNames(
        `border-solid border-[1px] border-[#171717]`
    );
    return (
        <>
            <h4 className="w-full text-2xl font-black">Create a new movie</h4>
            <form
                onSubmit={onSubmit}
                className="flex justify-center items-start flex-col gap-[10px] w-full"
            >
                <label>Title</label>
                <input
                    className={`p-2 w-full placeholder:text-sm placeholder:text-slate-600 bg-transparent ${borderClass}`}
                    type="text"
                    required
                    placeholder="Movie name..."
                    defaultValue={title}
                    onChange={handleChange}
                />
                <label>Genre</label>
                <PostCategory
                    categories={categories}
                    onSelect={handleCategory}
                />
                <button
                    className={`w-full p-2 hover:bg-[#171717] hover:text-white transition-all ${borderClass}`}
                >
                    Add Movie
                </button>
            </form>
        </>
    );
};

export default Movie;
