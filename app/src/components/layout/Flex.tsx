import { Axis } from "../../enums";
import Base, { BaseProps, ResponsiveProp } from "../Base";

type FlexProps = {
    axis?: ResponsiveProp<Axis>;
    gap?: ResponsiveProp<string>;
} & BaseProps;

const Flex: React.FC<FlexProps> = (props) => {
    const style = {
        display: "flex"
    }
    
    return <Base as="div" style={style}></Base>
}

export default Flex;