const PostCategory = ({ categories, onSelect, postCategory }) => {
    const handleSelect = (event) => {
        onSelect(event.target.value);
    };

    const renderCategories = categories.map((category) => (
        <option key={category.value} value={category.value}>
            {category.label}
        </option>
    ));

    return (
        <select
            onChange={handleSelect}
            required
            className="p-2 w-full placeholder:text-sm placeholder:text-slate-600 bg-transparent cursor-pointer font-black border-solid border-[1px] border-[#171717]"
            defaultValue={postCategory}
        >
            <option value="">Select Movie Category...</option>
            {renderCategories}
        </select>
    );
};

export default PostCategory;
