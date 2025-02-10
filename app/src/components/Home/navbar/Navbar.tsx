import LogoImage from "/images/logo.svg";
import OpenMenuIcon from "/icons/open_menu_btn.svg";
import { NavbarLinks, PrimaryButton, SecondaryButton } from "../../..";

type NavbarProps = {
    onMenuButtonClick?: () => void;
}

const Navbar = ({ onMenuButtonClick }: NavbarProps) => {  
    return (
        <div className="flex justify-between items-center w-full h-80 md:h-100 bg-offwhite px-[20px] md:px-[50px] lg:px-[188px]">
            <div className="flex items-center gap-x-[30px]">
                <img src={LogoImage} alt="Logo" className="w-140 md:w-165" />
                <NavbarLinks style="max-md:hidden flex" />
            </div>  
            <div>
                <img src={OpenMenuIcon} alt="Open Menu" className="cursor-pointer md:hidden" onClick={onMenuButtonClick} />
                <div className="flex gap-x-[15px]">
                    <SecondaryButton className="max-md:hidden" url="/login" >Log In</SecondaryButton>
                    <PrimaryButton className="max-md:hidden" url="/signup">Sign Up</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Navbar;