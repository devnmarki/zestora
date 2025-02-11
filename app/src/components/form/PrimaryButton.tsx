import { NavigateFunction, useNavigate } from "react-router-dom";
import { Base } from "../..";
import { BaseProps } from "../Base";
import { Colors } from "../../globals";

type PrimaryButtonProps = {
    children?: React.ReactNode;
    url?: string;
    onClick?: () => void;
} & BaseProps;

const PrimaryButton = ({ 
    children, 
    url = "", 
    onClick, 
    width = "100px", 
    height = "50px", 
    className,
    ...rest 
}: PrimaryButtonProps) => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <Base 
            as="button"
            className={`transition-all duration-100 ${className || ""}`}

            onClick={() => url !== "" ? navigate(url) : onClick}
            
            width={width}
            height={height}
            rounded="10px"
            backgroundColor={Colors.Blue}
            color={Colors.White}
            hover={{ opacity: 0.75 }}
            active={{ opacity: 0.5 }}

            {...rest}
        >{children}</Base>
    )
}

export default PrimaryButton;