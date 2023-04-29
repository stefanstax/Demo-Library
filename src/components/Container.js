import { PropTypes } from 'prop-types';

const Container = ({ children, size, padding, margin, main, secondary }) => {
    return (
        <section
            className={`w-full mx-auto ${size || 'max-w-[1024px]'} ${
                padding || 'p-4'
            } ${margin || 'my-12'} ${main && !size ? 'min-w-[1280px]' : null} ${
                secondary && !size ? 'max-w-[1024px]' : null
            }`}
        >
            {children}
        </section>
    );
};

Container.propTypes = {
    size: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    checkContainerType: ({ main, secondary }) => {
        const containerType = Number(!!main) + Number(!!secondary);
        if (containerType > 1) {
            return new Error('Container can be either main or secondary');
        }
    },
};

export default Container;
