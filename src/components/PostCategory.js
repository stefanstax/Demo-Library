const PostCategory = ({ categories, onSelect, postCategory }) => {
    const handleSelect = (event) => {
        onSelect(event.target.value);
    };

    const renderCategories = categories.map((category) => {
        const defaultValue = () => {
            if (postCategory === category?.value) {
                return 'selected';
            }
        };
        return (
            <option
                key={category.value}
                value={category.value}
                selected={defaultValue()}
            >
                {category.label}
            </option>
        );
    });

    return (
        <select
            onClick={handleSelect}
            required
            className="p-2 w-full placeholder:text-sm placeholder:text-slate-600 bg-transparent cursor-pointer"
        >
            <option value="">Select Movie Category...</option>
            {renderCategories}
        </select>
    );
};

export default PostCategory;
