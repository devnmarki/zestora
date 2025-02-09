import { NavigateFunction, useNavigate } from "react-router-dom";
import { NavbarLinks } from "../..";
import { Axis } from "../../enums";
import CloseMenuIcon from "/icons/close_menu_btn.svg";

type MenuProps = {
    onClose?: () => void;
}

const Menu = ({ onClose }: MenuProps) => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="flex flex-col justify-between absolute top-0 right-0 w-[320px] h-full p-[20px] bg-offwhite">
            <div className="flex flex-col gap-y-[30px]">
                <img src={CloseMenuIcon} alt="Close Menu" className="w-[30px] cursor-pointer" onClick={onClose} />
                <NavbarLinks style="flex text-[20px]" axis={Axis.Vertical} />
            </div>
            <div className="flex gap-x-[10px]">
                <button className="w-[135px] h-50 border-[2px] border-blue rounded-[10px] text-blue hover:border-none hover:text-offwhite hover:bg-blue transition-colors duration-100 active:opacity-75" onClick={() => navigate("/login")}>Log In</button>
                <button className="w-[135px] h-50 bg-blue rounded-[10px] hover:opacity-75 text-offwhite transition-opacity duration-100 active:opacity-50" onClick={() => navigate("/signup")}>Sign Up</button>
            </div>
        </div>
    )
}

export default Menu;