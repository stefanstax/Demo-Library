import React from 'react';
import className from 'classnames';

const Card = ({ book, children, rest }) => {
    const classes = className({
        ...rest?.className,
        'bg-slate-100 p-4 drop-shadow-md rounded-[15px] w-[30%] flex justify-start items-center flex-wrap gap-[10px]':
            book,
    });
    return (
        <div {...rest} className={classes}>
            {children}
        </div>
    );
};

export default Card;
