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
                backgroundColor: Colors.Blue,
                color: Colors.White
            }}
            active={{ opacity: 0.75 }}

            {...rest}
        >{children}</Base>
    )
}

export default SecondaryButton;