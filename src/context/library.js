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

    const createPost = async (newTitle) => {
        const response = await axios.post(`${gatewayURL}/posts`, {
            id: Math.round(Math.random() * 9999),
            title: newTitle,
        });

        const updatedPosts = [...posts, response.data];
        setPosts(updatedPosts);
    };

    const editPost = async (id, newTitle) => {
        const response = await axios.put(`${gatewayURL}/posts/${id}`, {
            title: newTitle,
        });

        const updatedPosts = posts.map((post) => {
            if (post.id === id) {
                return { ...post, ...response.data };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const deletePost = async (id) => {
        await axios.delete(`${gatewayURL}/posts/${id}`);

        const updatedPosts = posts.filter((post) => {
            return post.id !== id;
        });

        setPosts(updatedPosts);
    };

    const valueToShare = {
        posts,
        comments,
        fetchComments,
        fetchPosts,
        createPost,
        editPost,
        deletePost,
    };

    return (
        <LibraryContext.Provider value={valueToShare}>
            {children}
        </LibraryContext.Provider>
    );
};

export { Provider };
export default LibraryContext;
