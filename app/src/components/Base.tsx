// Base.tsx
import React, { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import { Transition } from "../globals";
import { TransitionTypes } from "../enums";

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

const getTransition = (transition: Transition | undefined): string | undefined => {
    if (!transition) return undefined;

    if (typeof transition === "string") return transition;

    let property = "all";
    switch (transition.type) {
        case TransitionTypes.All:
            property = "all";
            break;
        case TransitionTypes.Opacity:
            property = "opacity";
            break;
        case TransitionTypes.Colors:
            property = "color background-color border-color";
            break;
        default:
            property = "all";
            break;
    }
    
    const duration = transition.duration ? `${transition.duration}ms` : "300ms";

    return `${property} ${duration}`;
};

export type BaseProps = {
    as?: React.ElementType; // What element to render (button, div, etc.)
    children?: React.ReactNode;
    style?: React.CSSProperties;

    // Responsive style props:
    width?: ResponsiveProp<string>;
    height?: ResponsiveProp<string>;
    backgroundColor?: ResponsiveProp<string>;
    rounded?: ResponsiveProp<string>;
    border?: ResponsiveProp<string>;
    borderColor?: ResponsiveProp<string>;
    textColor?: ResponsiveProp<string>;
    opacity?: ResponsiveProp<number>;
    transition?: ResponsiveProp<Transition>;

    // Hover/active state styles:
    hover?: ResponsiveCSSProperties;
    active?: ResponsiveCSSProperties;
} & React.HTMLAttributes<HTMLElement>;

const Base: React.FC<BaseProps> = ({
    as: Component = "div",
    children,
    style = {},
    width,
    height,
    backgroundColor,
    rounded,
    border,
    borderColor,
    textColor,
    opacity,
    transition,
    hover,
    active,
    ...rest
}) => {
    const screenSize = useScreenSize();
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const resolvedBorder = resolveResponsiveValue(border, screenSize) as string | undefined;
    const resolvedBorderColor = resolveResponsiveValue(borderColor, screenSize) as string | undefined;

    const combinedBorder = resolvedBorder
      ? `${resolvedBorder} solid${resolvedBorderColor ? " " + resolvedBorderColor : ""}`
      : undefined;

    const baseStyles: React.CSSProperties = {
        width: resolveResponsiveValue(width, screenSize) as React.CSSProperties["width"],
        height: resolveResponsiveValue(height, screenSize) as React.CSSProperties["height"],
        backgroundColor: resolveResponsiveValue(backgroundColor, screenSize) as React.CSSProperties["backgroundColor"],
        borderRadius: resolveResponsiveValue(rounded, screenSize) as React.CSSProperties["borderRadius"],
        color: resolveResponsiveValue(textColor, screenSize) as React.CSSProperties["color"],
        opacity: resolveResponsiveValue(opacity, screenSize) as React.CSSProperties["opacity"],
        transition: getTransition(resolveResponsiveValue(transition, screenSize)) as React.CSSProperties["transition"],
        border: combinedBorder,
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
