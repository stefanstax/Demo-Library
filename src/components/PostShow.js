import React, { useState } from 'react';
import Card from './Card';
import PostDelete from './PostDelete';
import PostEdit from './PostEdit';
import { AiOutlineEdit, AiOutlineComment } from 'react-icons/ai';
import CreateComment from './CommentCreate';
import PostPhoto from './PostPhoto';

const PostShow = ({ post, comments }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isComment, setIsComment] = useState(false);

    const displayComments = comments.map((comment) => {
        return <span className="w-full underline">{comment?.title}</span>;
    });

    return (
        <Card book className="my-12">
            <PostPhoto post={post} />
            {/* Post Delete */}
            <PostDelete post={post} />
            {/* Post Edit */}
            <AiOutlineEdit
                className={`cursor-pointer hover:opacity-[0.6] transition-all ${
                    isEdit ? 'text-blue-600' : null
                }`}
                onClick={() => setIsEdit(!isEdit)}
            />
            <AiOutlineComment
                className={`cursor-pointer hover:opacity-[0.6] transition-all ${
                    isComment ? 'text-blue-600' : null
                }`}
                onClick={() => setIsComment(!isComment)}
            />
            <span className="text-[12px] text-gray-700 w-fit rounded-full p-2 w-fit min-w-[50px] text-center">
                ID: {post.id}
            </span>
            {isEdit ? (
                <PostEdit post={post} />
            ) : (
                <h4 className="text-[20px] font-black text-gray-800 w-full">
                    {post.title}
                </h4>
            )}
            {/* Comments */}
            <div className="w-full flex flex-wrap justify-start items-center gap-[5px]">
                <h5 className="w-full font-bold">Comments</h5>
                {isComment ? <CreateComment post={post} /> : null}
                {displayComments?.length ? (
                    displayComments
                ) : !isComment ? (
                    <span onClick={() => setIsComment(!isComment)}>
                        No comment. Write one?
                    </span>
                ) : null}
            </div>
        </Card>
    );
};

export default PostShow;
