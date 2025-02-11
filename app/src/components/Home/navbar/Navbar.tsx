import LogoImage from "/images/logo.svg";
import OpenMenuIcon from "/icons/open_menu_btn.svg";
import { Flex, NavbarLinks, PrimaryButton, SecondaryButton } from "../../..";
import { Alignment } from "../../../enums";
import { Colors } from "../../../globals";

type NavbarProps = {
    onMenuButtonClick?: () => void;
}

const Navbar = ({ onMenuButtonClick }: NavbarProps) => {  
    // className="flex justify-between items-center w-[1440px] h-80 md:h-100  px-[20px] md:px-[50px] lg:px-[188px]"
    
    return (
        <Flex 
            justify={Alignment.Center} 
            width="100%" 
            backgroundColor={Colors.White}
        >
            <Flex 
                justify={Alignment.Between} 
                items={Alignment.Center}
                width="1440px"
                height={{ base: "80px", md: "100px" }}
                padding={{ base: "0px 20px", md: "0px 50px" }}
            >
                
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

            </Flex>
        </Flex>
    )
}

export default Navbar;