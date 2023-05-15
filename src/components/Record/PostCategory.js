const PostCategory = ({ categories, genres, onSelect, postCategory }) => {
    const handleSelect = (event) => {
        onSelect(event.target.value);
    };

    let renderOptions;
    if (categories) {
        const options = categories.map((category) => (
            <option key={category.value} value={category.value}>
                {category.label}
            </option>
        ));
        renderOptions = options;
    } else if (genres) {
        const options = genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
                {genre.label}
            </option>
        ));
        renderOptions = options;
    }

    return (
        <select
            onChange={handleSelect}
            required
            className="p-2 w-full placeholder:text-sm placeholder:text-slate-600 bg-transparent cursor-pointer font-black border-solid border-[1px] border-[#171717]"
            defaultValue={postCategory}
        >
            <option value="">Select Genre...</option>
            {renderOptions}
        </select>
    );
};

export default PostCategory;
