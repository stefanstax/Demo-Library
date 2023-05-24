import React from "react";
import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

const Link = ({ to, children, activeClassName, className }) => {
    const { currentPath, navigate } = useNavigation();

    const classes = classNames(
        "font-black text-white underline hover:text-[#C7F860] transition-all",
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        navigate(to);
    };
    return (
        <a href={to} onClick={handleClick} className={classes}>
            {children}
        </a>
    );
};

export default Link;
