import { Flex, NavbarLinks, PrimaryButton, SecondaryButton } from "../..";
import { Alignment, Axis, PositionTypes } from "../../enums";
import { Colors } from "../../globals";
import CloseMenuIcon from "/icons/close_menu_btn.svg";

type MenuProps = {
    onClose?: () => void;
}

const Menu = ({ onClose }: MenuProps) => {
    return (
        <Flex 
            direction={Axis.Vertical}
            justify={Alignment.Between}
            position={PositionTypes.Absolute}
            top="0px"
            right="0px"
            width="320px"
            height="100%"
            padding="20px"
            backgroundColor={Colors.White}
        >
            <div className="flex flex-col gap-y-[30px]">
                <img src={CloseMenuIcon} alt="Close Menu" className="w-[30px] cursor-pointer" onClick={onClose} />
                <NavbarLinks style="flex text-[20px]" axis={Axis.Vertical} />
            </div>
            <Flex direction={Axis.Horizontal} gapX="15px" width="100%">
                <SecondaryButton width="100%" url="/login" >Log In</SecondaryButton>
                <PrimaryButton width="100%" height="50px" url="/signup">Sign Up</PrimaryButton>
            </Flex>
        </Flex>
    )
}

export default Menu;