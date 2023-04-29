import React from 'react';

const Container = ({ children }) => {
    return (
        <section className="w-full max-w-[1024px] mx-auto my-12 p-4">
            {children}
        </section>
    );
};

export default Container;
