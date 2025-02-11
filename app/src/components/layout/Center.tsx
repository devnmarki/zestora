import { Alignment } from "../../enums";
import Base, { BaseProps } from "../Base";

type CenterProps = {

} & BaseProps;

const Center = ({ 
    children, 
    ...rest 
}: CenterProps) => {
    return (
        <Base 
            as="div" 
            display="flex" 
            justifyContent={Alignment.Center} 
            alignItems={Alignment.Center} 

            {...rest}
        >
            {children}
        </Base>
    )
}

export default Center;