import { NavigateFunction, useNavigate } from "react-router-dom";
import { Base } from "../..";
import { BaseProps } from "../Base";
import { Colors } from "../../globals";

type SecondaryButtonProps = {
    children?: React.ReactNode;
    url?: string;
    onClick?: () => void;
} & BaseProps;

const SecondaryButton = ({ 
    children, 
    url = "", 
    onClick, 
    width = "100px", 
    height = "50px", 
    className,
    ...rest 
}: SecondaryButtonProps) => {
    const navigate: NavigateFunction = useNavigate();

    // <button onClick={() => navigate("/login")} className="max-md:hidden w-100 h-50 border-[2px] border-blue rounded-[10px] text-blue hover:border-none hover:text-offwhite hover:bg-blue transition-colors duration-100 active:opacity-75">Log In</button>

    return (
        <Base 
            as="button"
            className={`transition-colors duration-100 ${className || ""}`}

            onClick={() => url !== "" ? navigate(url) : onClick}
            
            width={width}
            height={height}
            rounded="10px"
            color={Colors.Blue}
            opacity={1}
            borderSize={"2px"}
            borderColor={Colors.Blue}
            hover={{ 
                border: "none",
                backgroundColor: Colors.Blue,
                color: Colors.White
            }}
            active={{ opacity: 0.75 }}

            {...rest}
        >{children}</Base>
    )
}

export default SecondaryButton;