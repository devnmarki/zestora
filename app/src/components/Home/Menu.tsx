import { NavbarLinks } from "../..";
import { Axis } from "../../enums";
import CloseMenuIcon from "/icons/close_menu_btn.svg";

type MenuProps = {
    onClose?: () => void;
}

const Menu = ({ onClose }: MenuProps) => {
    return (
        <div className="flex flex-col justify-between absolute top-0 right-0 w-[320px] h-full p-[20px] bg-offwhite">
            <div className="flex flex-col gap-y-[30px]">
                <img src={CloseMenuIcon} alt="Close Menu" className="w-[30px] cursor-pointer" onClick={onClose} />
                <NavbarLinks style="flex text-[20px]" axis={Axis.Vertical} />
            </div>
        </div>
    )
}

export default Menu;