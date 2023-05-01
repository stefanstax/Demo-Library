import React from 'react';
import className from 'classnames';

const Card = ({ book, children, rest }) => {
    const classes = className({
        ...rest?.className,
        'bg-gradient-to-b from-[#7D2AE8] from-10%  via-[#4A6EE0] via-30% to-[#C7F860] to-20% p-4 drop-shadow-md rounded-[7.5px] w-[48%] md:w-[30%] flex justify-start items-center flex-wrap gap-[10px]':
            book,
    });
    return (
        <div {...rest} className={classes}>
            {children}
        </div>
    );
};

export default Card;
