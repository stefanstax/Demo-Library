import { useState, createContext, useCallback } from "react";
import axios from "axios";
import { gatewayURL } from "../gateway";

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [members, setMembers] = useState([]);
    const [users, setUsers] = useState([]);
    const [podcastCategories, setPodcastCategories] = useState([]);
    const [movieCategories, setMovieCategories] = useState([]);

    const fetchPosts = useCallback(async () => {
        const response = await axios.get(`${gatewayURL}/posts`);
        setPosts(response.data);
    }, []);

    const fetchComments = useCallback(async () => {
        const response = await axios.get(`${gatewayURL}/comments`);
        setComments(response.data);
    }, []);

    const fetchMembers = useCallback(async () => {
        const response = await axios.get(`${gatewayURL}/authentication`);
        setMembers(response.data);
    });

    const fetchPodcastCategories = useCallback(async () => {
        const response = await axios.get(`${gatewayURL}/podcast-categories`);
        setPodcastCategories(response?.data);
    });

    const fetchMovieCategories = useCallback(async () => {
        const response = await axios.get(`${gatewayURL}/movie-categories`);
        setMovieCategories(response?.data);
    });

    const createPost = async (
        newTitle,
        pickedCategory,
        pickedRecord,
        author
    ) => {
        const response = await axios.post(`${gatewayURL}/posts`, {
            title: newTitle,
            genre: pickedCategory,
            recordType: pickedRecord,
            author,
        });

        const updatedPosts = [...posts, response.data];
        setPosts(updatedPosts);
    };

    const createPodcastCategory = async (title, value) => {
        const response = await axios.post(`${gatewayURL}/podcast-categories`, {
            title: title,
            value: value,
        });

        const newPodcastCategories = [...podcastCategories, response.data];
        setPodcastCategories(newPodcastCategories);
    };

    const createMovieCategory = async (title, value) => {
        const response = await axios.post(`${gatewayURL}/movie-categories`, {
            title: title,
            value: value,
        });

        const newMovieCategories = [...movieCategories, response.data];
        setMovieCategories(newMovieCategories);
    };

    const editPost = async (
        id,
        newTitle,
        pickedCategory,
        pickedRecord,
        author
    ) => {
        const response = await axios.put(`${gatewayURL}/posts/${id}`, {
            title: newTitle,
            genre: pickedCategory,
            recordType: pickedRecord,
            author,
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

    const createUser = async (username, password) => {
        const response = await axios.post(`${gatewayURL}/authentication`, {
            username: username,
            password: password,
        });

        const updatedUsers = [...users, response.data];
        setUsers(updatedUsers);
    };

    // ! Redirect Auth url back to homepage
    // todo Find a better way to mask this url and redirection
    if (window.location.pathname.includes("authentication")) {
        return (window.location.pathname = "/");
    }

    const movies = posts.filter((post) => post?.recordType === "movie");
    const songs = posts.filter((post) => post?.recordType === "song");
    const podcasts = posts.filter((post) => post?.recordType === "podcast");

    const valueToShare = {
        posts,
        movies,
        songs,
        comments,
        members,
        podcasts,
        podcastCategories,
        movieCategories,

        fetchComments,
        fetchPosts,
        fetchMembers,
        fetchPodcastCategories,
        fetchMovieCategories,

        createMovieCategory,
        createPodcastCategory,
        createPost,
        createUser,

        editPost,

        deletePost,
    };

    return (
        <LibraryContext.Provider value={valueToShare}>
            {children}
        </LibraryContext.Provider>
    );
};

export { LibraryProvider };
export default LibraryContext;
