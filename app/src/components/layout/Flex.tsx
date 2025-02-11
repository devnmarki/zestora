import { Alignment, Axis, DisplayTypes } from "../../enums";
import Base, { BaseProps } from "../Base";

type FlexProps = {
    direction?: Axis;
    justify?: Alignment;
    items?: Alignment;
    gapX?: string;
    gapY?: string;
} & BaseProps;

const Flex = ({ 
    className,
    children,

    direction = Axis.Horizontal,
    justify = Alignment.Start,
    items = Alignment.Start,
    gapX = "0",
    gapY = "0",

    ...rest
}: FlexProps) => {
    return (
        <Base 
            as="div" 
            className={className || ""} 

            display={DisplayTypes.Flex}
            justifyContent={justify}
            alignItems={items}
            columnGap={gapX}
            rowGap={gapY}
            flexDirection={direction}

            {...rest} 
        >
            {children}
        </Base>
    )
}

export default Flex;