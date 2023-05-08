import { PropTypes } from 'prop-types';

const Container = ({
    children,
    padding,
    margin,
    main,
    secondary,
    flex,
    justify,
    items,
    wrap,
    gap,
}) => {
    return (
        <section
            className={`w-full ${flex ? 'flex' : 'block'} ${
                justify === 'left'
                    ? 'justify-left'
                    : justify === 'center'
                    ? 'justify-center'
                    : justify === 'right'
                    ? 'justify-right'
                    : justify === 'stretch'
                    ? 'justify-stretch'
                    : justify === 'start'
                    ? 'justify-start'
                    : justify === 'end'
                    ? 'justify-end'
                    : justify === 'between'
                    ? 'justify-between'
                    : justify === 'around'
                    ? 'justify-around'
                    : justify === 'evenly'
                    ? 'justify-evenly'
                    : null
            }
                ${
                    items === 'left'
                        ? 'items-left'
                        : items === 'center'
                        ? 'items-center'
                        : items === 'right'
                        ? 'items-right'
                        : items === 'stretch'
                        ? 'items-stretch'
                        : items === 'start'
                        ? 'items-start'
                        : items === 'end'
                        ? 'items-end'
                        : null
                } ${wrap && 'flex-wrap'} ${gap ? `gap-${gap}` : null} mx-auto ${
                padding || 'p-4'
            } ${margin || 'my-12'} ${
                main && !secondary ? 'min-w-[1280px]' : null
            } ${secondary && !main ? 'max-w-[1024px]' : null}`}
        >
            {children}
        </section>
    );
};

Container.propTypes = {
    margin: PropTypes.string,
    padding: PropTypes.string,
    flex: PropTypes.bool,
    justify: PropTypes.string,
    items: PropTypes.string,
    wrap: PropTypes.bool,
    gap: PropTypes.number,
    checkContainerType: ({ main, secondary }) => {
        const containerType = Number(!!main) + Number(!!secondary);
        if (containerType > 1) {
            return new Error('Container can be either main or secondary');
        }
    },
};

export default Container;
