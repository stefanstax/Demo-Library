import StaxyLogo from '../assets/images/staxy-logo.png';
import { paths } from '../context/paths';
import Link from './Link';

const Menu = () => {
    const renderPaths = paths.map((path) => {
        return <Link to={path.value}>{path?.label}</Link>;
    });
    return (
        <div className="fixed top-0 z-[99] w-full min-h-[75px] h-[75px] bg-[#171717] p-2 shadow-xl flex justify-start items-center gap-[30px]">
            <img
                className="w-[120px] object-fit object-center"
                src={StaxyLogo}
                alt=""
            />
            <div className="flex flex-wrap gap-[10px]">{renderPaths}</div>
        </div>
    );
};

export default Menu;
