import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import useLibraryContext from '../../hooks/use-library-context';
import { recordtypes } from '../../context/recordtypes';
import RecordType from './RecordType';
import Movie from '../Movie';
import Song from '../Song';
import { Grid, Box } from '@mui/material';

const RecordCreate = () => {
    const { createPost } = useLibraryContext();
    const [recordType, setRecordType] = useState('');
    const [isCreate, setIsCreate] = useState(false);

    const handleRecordType = (recordType) => {
        setRecordType(recordType);
    };

    return (
        <Grid
            item
            xs={12}
            md={4}
            lg={3}
            className="flex justify-center items-center bg-[#C7F86080] hover:bg-[#C7F860] transition-all rounded-[7.5px] drop-shadow-2xl p-4 min-h-[200px] cursor-pointer"
            onClick={() => setIsCreate(true)}
        >
            {isCreate ? (
                <Box
                    component="div"
                    className="flex justify-center items-center flex-col gap-[10px] w-full"
                >
                    <RecordType
                        recordtypes={recordtypes}
                        onSelect={handleRecordType}
                    />

                    {recordType === 'movie' && (
                        <Movie createPost={createPost} />
                    )}

                    {recordType === 'song' && <Song createPost={createPost} />}
                </Box>
            ) : (
                <AiOutlinePlus fontSize={40} />
            )}
        </Grid>
    );
};

export default RecordCreate;
