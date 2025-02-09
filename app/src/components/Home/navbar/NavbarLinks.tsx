import { Link } from "react-router-dom"
import { Axis } from "../../../enums";

type NavbarLinksProps = {
    style?: string;
    axis?: Axis;
}

const NavbarLinks = ({ axis = Axis.Horizontal, style }: NavbarLinksProps) => {
    return (
        <div className={`${style} ${axis === Axis.Horizontal ? "flex-row" : "flex-col"} gap-[15px] text-gray-200`}>
            <Link className="hover:text-offblack transition-colors duration-100" to="#">Home</Link>
            <Link className="hover:text-offblack transition-colors duration-100" to="#">Sell</Link>
            <Link className="hover:text-offblack transition-colors duration-100" to="#">Dashboard</Link>
        </div>
    )
}

export default NavbarLinks;