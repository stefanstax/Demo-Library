import React from 'react';
import useLibraryContext from '../hooks/use-library-context';
import CommentDelete from './CommentDelete';

const CommentList = () => {
    const { comments } = useLibraryContext();

    const displayComments = comments.map((comment) => {
        return (
            <span className="underline p-2 font-bold rounded-[5px] text-[12px] flex justify-center items-center gap-[10px]">
                {comment.title} <CommentDelete comment={comment} />
            </span>
        );
    });
    return (
        <div className="w-full bg-[#C7F860] rounded-[7.5px] p-2 flex justify-start items-center gap-[10px] flex-wrap">
            {displayComments}
        </div>
    );
};

export default CommentList;
