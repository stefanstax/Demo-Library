import { useState, createContext, useCallback } from 'react';
import axios from 'axios';
import { gatewayURL } from '../gateway';

const LibraryContext = createContext();

const Provider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    const fetchPosts = useCallback(async () => {
        const response = await axios.get(`${gatewayURL}/posts`);
        setPosts(response.data);
    }, []);

    const fetchComments = useCallback(async () => {
        const response = await axios.get(`${gatewayURL}/comments`);
        setComments(response.data);
    }, []);

    const valueToShare = {
        posts,
        comments,
        fetchComments,
        fetchPosts,
    };

    return (
        <LibraryContext.Provider value={valueToShare}>
            {children}
        </LibraryContext.Provider>
    );
};

export { Provider };
export default LibraryContext;
