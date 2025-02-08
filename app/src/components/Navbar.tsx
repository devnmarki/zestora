import LogoImage from "/images/logo.svg";
import OpenMenuIcon from "/icons/open_menu_btn.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full h-80 md:h-100 bg-offwhite px-[20px] md:px-[50px] lg:px-[188px]">
            <div className="flex items-center gap-x-[30px]">
                <img src={LogoImage} alt="Logo" className="w-140 md:w-165" />
                <div className="max-md:hidden flex gap-x-[15px] text-gray-200">
                    <Link className="hover:text-offblack transition-colors duration-100" to="#">Home</Link>
                    <Link className="hover:text-offblack transition-colors duration-100" to="#">Sell</Link>
                    <Link className="hover:text-offblack transition-colors duration-100" to="#">Dashboard</Link>
                </div>
            </div>  
            <div>
                <img src={OpenMenuIcon} alt="Open Menu" className="cursor-pointer md:hidden" />
                <div className="flex gap-x-[15px]">
                    <button className="max-md:hidden w-100 h-50 border-[2px] border-blue rounded-[10px] text-blue hover:border-none hover:text-offwhite hover:bg-blue transition-colors duration-100 active:opacity-75">Log In</button>
                    <button className="max-md:hidden w-100 h-50 bg-blue rounded-[10px] hover:opacity-75 text-offwhite transition-opacity duration-100 active:opacity-50">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;