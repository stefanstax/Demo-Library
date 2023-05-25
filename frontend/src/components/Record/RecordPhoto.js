import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import RecordDelete from "./RecordDelete";

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
                        "uxU8rcXkifjxppdPA1IyiQ0VYnhtUlnDYgV8d8m5QxcOByoynogcpQM9",
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
                className="w-full max-w-[150px] mx-auto rounded object-fit mt-4 drop-shadow-2xl object-cover h-[150px] rounded-t relative"
                alt=""
            />
        </>
    );
};

export default Photo;
