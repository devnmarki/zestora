import { Base } from "../..";
import { BaseProps, ResponsiveProp } from "../Base";

type InputProps = {
    placeholder?: string;
    width?: ResponsiveProp<string>;
} & BaseProps;

const Input = ({ placeholder, children, width, ...rest }: InputProps) => {
    return (
        <Base as="input" placeholder={placeholder} width={width} className="outline-none px-[15px] placeholder:text-gray-200 placeholder:font-light" {...rest}>{children}</Base>
    )
}

export default Input;