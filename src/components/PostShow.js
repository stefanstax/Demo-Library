import React, { useState } from 'react';
import Card from './Card';
import PostDelete from './PostDelete';
import PostEdit from './PostEdit';
import { AiOutlineEdit } from 'react-icons/ai';
import CreateComment from './CommentCreate';
import PostPhoto from './PostPhoto';

const PostShow = ({ post, comments }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isCategoryUpdate, setIsCategoryUpdate] = useState(false);

    const displayComments = comments.map((comment) => {
        return (
            <span key={comment?.id} className="w-full underline">
                {comment?.title}
            </span>
        );
    });

    const disableSave = () => {
        setIsEdit(false);
    };

    return (
        <Card book className="my-12">
            <PostPhoto post={post} />
            {/* Post Delete */}
            <PostDelete post={post} />
            <span className="text-[12px] text-gray-700 w-fit rounded-full p-2 w-fit min-w-[50px] text-center">
                ID: {post.id}
            </span>
            <div className="w-full">
                <span className="w-fit text-[12px] bg-[#171717] px-2 py-1 rounded-[5px] text-[#C7F860] uppercase">
                    {post?.movieCategory}
                </span>
            </div>
            {isEdit ? (
                <PostEdit post={post} onSave={disableSave} />
            ) : (
                <h4 className="text-[20px] font-black text-gray-800 flex justify-between items-center gap-[5px] w-full">
                    {post.title}{' '}
                    <AiOutlineEdit
                        className={`cursor-pointer hover:opacity-[0.6] transition-all w-fit ${
                            isEdit ? 'text-blue-600' : null
                        }`}
                        onClick={() => setIsEdit(!isEdit)}
                    />
                </h4>
            )}
            {/* Comments */}
            <div className="w-full flex flex-wrap justify-start items-center gap-[5px]">
                <h5 className="w-full font-bold">Comments</h5>
                <span className="text-[10px]">
                    {displayComments?.length}{' '}
                    {displayComments?.length > 1 ||
                    displayComments?.length === 0
                        ? 'comments'
                        : 'comment'}
                </span>
                {displayComments?.length ? displayComments : null}
                <span>
                    <CreateComment post={post} />
                </span>
            </div>
        </Card>
    );
};

export default PostShow;
