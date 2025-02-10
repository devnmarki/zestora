import LogoImage from "/images/logo.svg";
import OpenMenuIcon from "/icons/open_menu_btn.svg";
import { NavbarLinks, PrimaryButton } from "../../..";
import { NavigateFunction, useNavigate } from "react-router-dom";

type NavbarProps = {
    onMenuButtonClick?: () => void;
}

const Navbar = ({ onMenuButtonClick }: NavbarProps) => {  
    const navigate: NavigateFunction = useNavigate();
    
    return (
        <div className="flex justify-between items-center w-full h-80 md:h-100 bg-offwhite px-[20px] md:px-[50px] lg:px-[188px]">
            <div className="flex items-center gap-x-[30px]">
                <img src={LogoImage} alt="Logo" className="w-140 md:w-165" />
                <NavbarLinks style="max-md:hidden flex" />
            </div>  
            <div>
                <img src={OpenMenuIcon} alt="Open Menu" className="cursor-pointer md:hidden" onClick={onMenuButtonClick} />
                <div className="flex gap-x-[15px]">
                    <button onClick={() => navigate("/login")} className="max-md:hidden w-100 h-50 border-[2px] border-blue rounded-[10px] text-blue hover:border-none hover:text-offwhite hover:bg-blue transition-colors duration-100 active:opacity-75">Log In</button>
                    <PrimaryButton className="max-md:hidden" width="100px" height="50px" url="/signup">Sign Up</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Navbar;