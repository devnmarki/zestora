import React, { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import { Alignment, Axis } from "../enums";

export type Breakpoints = "base" | "sm" | "md" | "lg" | "xl" | "xxl";

export type ResponsiveProp<T> = T | Partial<Record<Breakpoints, T>>;

export type ResponsiveCSSProperties = {
    [K in keyof React.CSSProperties]?: ResponsiveProp<React.CSSProperties[K]>;
};

export const resolveResponsiveValue = <T,>(
    responsiveProp: ResponsiveProp<T> | undefined,
    screenSize: Record<Breakpoints, boolean>
): T | undefined => {
    if (responsiveProp == null) return undefined;
    if (typeof responsiveProp !== "object") return responsiveProp;
    const responsiveObj = responsiveProp as Partial<Record<Breakpoints, T>>;
    const breakpoints: Breakpoints[] = ["xxl", "xl", "lg", "md", "sm", "base"];
    for (const bp of breakpoints) {
        if (screenSize[bp] && responsiveObj[bp] !== undefined) {
        return responsiveObj[bp];
        }
    }
    return undefined;
};
export const resolveResponsiveStyles = (
    styles: ResponsiveCSSProperties | undefined,
    screenSize: Record<Breakpoints, boolean>
): React.CSSProperties => {
    const resolved: any = {};
    if (!styles) return resolved;
    for (const key in styles) {
        if (Object.prototype.hasOwnProperty.call(styles, key)) {
            const styleKey = key as keyof React.CSSProperties;
            const value = styles[styleKey];
            if (value !== undefined) {
                resolved[styleKey] = resolveResponsiveValue(value, screenSize) as React.CSSProperties[typeof styleKey];
            }
        }
    }
    return resolved;
};
export type BaseProps = {
    as?: React.ElementType; // What element to render (button, div, etc.)
    children?: React.ReactNode;
    style?: React.CSSProperties;
    
    display?: ResponsiveProp<string>;
    flexDirection?: ResponsiveProp<Axis>;
    justifyContent?: ResponsiveProp<Alignment>;
    alignItems?: ResponsiveProp<Alignment>;
    columnGap?: ResponsiveProp<string>;
    rowGap?: ResponsiveProp<string>;
    width?: ResponsiveProp<string>;
    height?: ResponsiveProp<string>;
    padding?: ResponsiveProp<string>;
    margin?: ResponsiveProp<string>;
    backgroundColor?: ResponsiveProp<string>;
    rounded?: ResponsiveProp<string>;
    color?: ResponsiveProp<string>;
    borderSize?: ResponsiveProp<string>;
    borderColor?: ResponsiveProp<string>;
    opacity?: ResponsiveProp<number>;

    hover?: ResponsiveCSSProperties;
    active?: ResponsiveCSSProperties;
} & React.HTMLAttributes<HTMLElement>;
const Base: React.FC<BaseProps> = ({
    as: Component = "div",
    children,
    style = {},
    
    display,
    flexDirection,
    justifyContent,
    alignItems,
    columnGap,
    rowGap,
    width,
    height,
    padding,
    margin,
    backgroundColor,
    rounded,
    color,
    borderSize,
    borderColor,
    opacity,
    
    hover,
    active,
    ...rest
}) => {
    const screenSize = useScreenSize();

    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const baseStyles: React.CSSProperties = {
        display: resolveResponsiveValue(display, screenSize) as React.CSSProperties["display"],
        flexDirection: resolveResponsiveValue(flexDirection, screenSize) as React.CSSProperties["flexDirection"],
        justifyContent: resolveResponsiveValue(justifyContent, screenSize) as React.CSSProperties["justifyContent"],
        alignItems: resolveResponsiveValue(alignItems, screenSize) as React.CSSProperties["alignItems"],
        rowGap: resolveResponsiveValue(rowGap, screenSize) as React.CSSProperties["rowGap"],
        columnGap: resolveResponsiveValue(columnGap, screenSize) as React.CSSProperties["columnGap"],
        width: resolveResponsiveValue(width, screenSize) as React.CSSProperties["width"],
        height: resolveResponsiveValue(height, screenSize) as React.CSSProperties["height"],
        padding: resolveResponsiveValue(padding, screenSize) as React.CSSProperties["padding"],
        margin: resolveResponsiveValue(margin, screenSize) as React.CSSProperties["margin"],
        backgroundColor: resolveResponsiveValue(backgroundColor, screenSize) as React.CSSProperties["backgroundColor"],
        borderRadius: resolveResponsiveValue(rounded, screenSize) as React.CSSProperties["borderRadius"],
        color: resolveResponsiveValue(color, screenSize) as React.CSSProperties["color"],
        border: `${resolveResponsiveValue(borderSize, screenSize) as React.CSSProperties["border"]} solid ${resolveResponsiveValue(borderColor, screenSize) as React.CSSProperties["border"]}`,
        opacity: resolveResponsiveValue(opacity, screenSize) as React.CSSProperties["opacity"],
        ...style,
    };

    const hoverStyles = resolveResponsiveStyles(hover, screenSize);
    const activeStyles = resolveResponsiveStyles(active, screenSize);

    // Merge base, hover, and active styles.
    let finalStyle = { ...baseStyles };
    if (isHovered) {
        finalStyle = { ...finalStyle, ...hoverStyles };
    }
    if (isActive) {
        finalStyle = { ...finalStyle, ...activeStyles };
    }

    return (
        <Component
        style={finalStyle}
        onMouseEnter={(e: any) => {
            setIsHovered(true);
            rest.onMouseEnter && rest.onMouseEnter(e);
        }}
        onMouseLeave={(e: any) => {
            setIsHovered(false);
            setIsActive(false);
            rest.onMouseLeave && rest.onMouseLeave(e);
        }}
        onMouseDown={(e: any) => {
            setIsActive(true);
            rest.onMouseDown && rest.onMouseDown(e);
        }}
        onMouseUp={(e: any) => {
            setIsActive(false);
            rest.onMouseUp && rest.onMouseUp(e);
        }}
        {...rest}
        >
        {children}
        </Component>
    );
};
export default Base;