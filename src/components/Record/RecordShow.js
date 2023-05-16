import React, { useState } from 'react';
import Card from '../Card';
import PostDelete from './RecordDelete';
import PostEdit from './RecordEdit';
import PostPhoto from './RecordPhoto';
import CreateComment from '../Comments/CommentCreate';
import classNames from 'classnames';

const PostShow = ({ post, comments }) => {
    const [isEdit, setIsEdit] = useState(false);

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

    const attributes = classNames(
        `text-gray-800 flex justify-between items-center gap-[5px] w-full`
    );

    return (
        <Card book className="my-12">
            <PostPhoto post={post} />
            {/* Post Delete */}
            <div className="w-full">
                <div className="w-fit mb-4 flex gap-[10px] justify-center items-center bg-[#171717] text-white drop-shadow-xl">
                    <span className="text-[12px] flex gap-[10px] justify-center items-center p-2">
                        ID: {post.id}
                        <PostDelete post={post} />
                    </span>
                </div>
                {isEdit ? (
                    <PostEdit post={post} onSave={disableSave} />
                ) : (
                    <>
                        <h4 className={`text-[20px] font-black ${attributes}`}>
                            {post?.title}
                        </h4>
                        <span className={`text-[14px] italic ${attributes}`}>
                            by {post?.author}
                        </span>
                        <span className={`text-[14px] italic ${attributes}`}>
                            categorized in {post?.genre}
                        </span>
                        <button
                            onClick={() => setIsEdit(!isEdit)}
                            className="text-[#171717] w-fit px-2 py-1 border border-solid border-[1px] border-[#171717] hover:bg-[#171717] hover:text-white transition-all mt-4"
                        >
                            Edit{' '}
                            {post?.recordType === 'movie' ? 'Movie' : 'Song'}
                        </button>
                    </>
                )}
            </div>
            {/* Comments */}
            <div className="w-full flex flex-wrap justify-start items-center gap-[5px] mt-8">
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
