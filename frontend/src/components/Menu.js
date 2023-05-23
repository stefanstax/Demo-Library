import { Box } from '@mui/material';
import StaxyLogo from '../assets/images/staxy-logo.png';
import { paths } from '../context/paths';
import Link from './Link';

const Menu = () => {
    const renderPaths = paths.map((path) => {
        return <Link to={path.value}>{path?.label}</Link>;
    });
    return (
        <Box className="fixed left-0 top-0 z-[99] w-full min-h-[75px] h-[75px] bg-[#171717] p-2 shadow-xl flex justify-start items-center gap-[30px]">
            <img
                className="w-[120px] object-fit object-center"
                src={StaxyLogo}
                alt=""
            />
            <Box className="flex flex-wrap gap-[10px]">{renderPaths}</Box>
        </Box>
    );
};

export default Menu;
