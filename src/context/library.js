import { useState, createContext, useCallback } from 'react';
import axios from 'axios';
import { gatewayURL } from '../gateway';

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
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

    const createComment = async (newTitle, postId) => {
        const response = await axios.post(`${gatewayURL}/comments/`, {
            id: Math.round(Math.random() * 9999),
            title: newTitle,
            postId: postId,
        });

        const updatedComments = [...comments, response.data];
        setComments(updatedComments);
    };

    const deleteComment = async (id) => {
        await axios.delete(`${gatewayURL}/comments/${id}`);

        const updatedComments = comments.filter((comment) => {
            return comment.id !== id;
        });

        setComments(updatedComments);
    };

    const createPost = async (newTitle, pickedCategory) => {
        const response = await axios.post(`${gatewayURL}/posts`, {
            id: Math.round(Math.random() * 9999),
            title: newTitle,
            genre: pickedCategory,
        });

        const updatedPosts = [...posts, response.data];
        setPosts(updatedPosts);
    };

    const editPost = async (id, newTitle, pickedCategory) => {
        const response = await axios.put(`${gatewayURL}/posts/${id}`, {
            title: newTitle,
            genre: pickedCategory,
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
        createComment,
        deleteComment,
    };

    return (
        <LibraryContext.Provider value={valueToShare}>
            {children}
        </LibraryContext.Provider>
    );
};

export { LibraryProvider };
export default LibraryContext;
