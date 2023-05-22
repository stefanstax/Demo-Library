import React from 'react';
import className from 'classnames';

const Card = ({ children, rest }) => {
    const classes = className(
        ...rest?.className,
        'bg-gradient-to-b from-[#171717] from-[150px]  via-[#303030] via-30% to-[#C7F860] to-0% p-4 drop-shadow-md rounded-[7.5px] w-[48%] md:w-[32%] flex justify-start items-center flex-wrap gap-[10px] h-full min-h-[400px]'
    );
    return (
        <div {...rest} className={classes}>
            {children}
        </div>
    );
};

export default Card;
