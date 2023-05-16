import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import useLibraryContext from '../../hooks/use-library-context';
import { categories } from '../../context/categories';
import { recordtypes } from '../../context/recordtypes';
import { genres } from '../../context/genres';
import RecordType from './RecordType';
import Movie from '../Movie';
import Song from '../Song';

const PostCreate = () => {
    const { createPost } = useLibraryContext();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState([]);
    const [recordType, setRecordType] = useState('');
    const [isCreate, setIsCreate] = useState(false);
    const [author, setAuthor] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        createPost(title, category, recordType, author);
        setTitle('');
        setIsCreate(false);
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleCategory = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const handleRecordType = (recordType) => {
        setRecordType(recordType);
    };

    const handleAuthor = (event) => {
        setAuthor(event.target.value);
    };

    return (
        <div
            className="flex justify-center items-center w-[48%] md:w-[32%] bg-[#C7F86080] hover:bg-[#C7F860] transition-all rounded-[7.5px] drop-shadow-2xl p-4 min-h-[200px] cursor-pointer"
            onClick={() => setIsCreate(true)}
        >
            {isCreate ? (
                <div className="flex justify-center items-center flex-col gap-[10px] w-full">
                    <RecordType
                        recordtypes={recordtypes}
                        onSelect={handleRecordType}
                    />

                    {recordType === 'movie' && (
                        <Movie
                            handleCategory={handleCategory}
                            categories={categories}
                            handleChange={handleChange}
                            onSubmit={onSubmit}
                            title={title}
                        />
                    )}
                    {recordType === 'song' && (
                        <Song
                            handleCategory={handleCategory}
                            genres={genres}
                            handleChange={handleChange}
                            onSubmit={onSubmit}
                            title={title}
                            handleAuthor={handleAuthor}
                        />
                    )}
                </div>
            ) : (
                <AiOutlinePlus fontSize={40} />
            )}
        </div>
    );
};

export default PostCreate;
