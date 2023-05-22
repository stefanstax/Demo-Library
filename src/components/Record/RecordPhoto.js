import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import RecordDelete from './RecordDelete';

const Photo = ({ post }) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`https://api.pexels.com/v1/search`, {
                params: {
                    query: post?.title,
                    per_page: 1,
                    page: 1,
                },
                headers: {
                    Authorization:
                        'uxU8rcXkifjxppdPA1IyiQ0VYnhtUlnDYgV8d8m5QxcOByoynogcpQM9',
                },
            });
            setResponse(result.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <img
                src={response?.photos[0]?.src?.medium}
                className="w-full object-fit object-cover h-[150px] rounded-t relative"
                alt=""
            />
            <Box className="absolute w-fit px-2 flex gap-[10px] justify-center items-center bg-red-500 text-white drop-shadow-xl rounded-br">
                <Typography
                    variant="span"
                    className="text-[12px] flex gap-[10px] justify-center items-center p-1"
                >
                    ID: {post.id}
                    <RecordDelete post={post} />
                </Typography>
            </Box>
        </>
    );
};

export default Photo;
