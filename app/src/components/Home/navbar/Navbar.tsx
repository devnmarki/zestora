import LogoImage from "/images/logo.svg";
import OpenMenuIcon from "/icons/open_menu_btn.svg";
import { Flex, NavbarLinks, PrimaryButton, SecondaryButton } from "../../..";
import { Alignment } from "../../../enums";
import { Colors } from "../../../globals";

type NavbarProps = {
    onMenuButtonClick?: () => void;
}

const Navbar = ({ onMenuButtonClick }: NavbarProps) => {  

    return (
        <Flex  justify={Alignment.Center} width="100%" backgroundColor={Colors.White}>
            <Flex 
                justify={Alignment.Between} 
                items={Alignment.Center}
                width="1440px"
                height={{ base: "80px", md: "100px" }}
                padding={{ base: "0px 20px", md: "0px 50px" }}
            >

                <Flex items={Alignment.Center} gapX="40px">
                    <img src={LogoImage} alt="Logo" className="w-140 md:w-165" />
                    <NavbarLinks style="max-md:hidden flex" />
                </Flex>  

                <div>
                    <img src={OpenMenuIcon} alt="Open Menu" className="cursor-pointer md:hidden" onClick={onMenuButtonClick} />
                    <Flex gapX="15px">
                        <SecondaryButton className="max-md:hidden" url="/login" >Log In</SecondaryButton>
                        <PrimaryButton className="max-md:hidden" url="/signup">Sign Up</PrimaryButton>
                    </Flex>
                </div>

            </Flex>
        </Flex>
    )
}

export default Navbar;