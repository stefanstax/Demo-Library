import React from 'react';
import useLibraryContext from '../hooks/use-library-context';
import PostShow from './PostShow';
import PostCreate from './PostCreate';
import CommentList from './CommentList';
import Container from './Container';

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
        <Container
            secondary
            justify={'between'}
            flex
            items={'stretch'}
            wrap
            gap={'[10px]'}
        >
            {displayPosts}
            <PostCreate />
            <h4 className="w-full font-black text-2xl">Comments</h4>
            <CommentList />
        </Container>
    );
};

export default PostList;
