import React from 'react';
import useLibraryContext from '../hooks/use-library-context';
import PostShow from './PostShow';
import PostCreate from './PostCreate';

const PostList = () => {
    const { posts, comments } = useLibraryContext();

    const displayPosts = posts.map((post) => {
        const filteredComments = comments.filter(
            (comment) => comment.postId === post.id
        );
        return (
            <PostShow post={post} comments={filteredComments} key={post.id} />
        );
    });

    return (
        // todo Make a Grid component - allow ...rest with classes
        <div className="flex justify-start items-stretch flex-wrap gap-[10px] w-full mx-auto max-w-[1024px]">
            {displayPosts}
            <PostCreate />
        </div>
    );
};

export default PostList;
