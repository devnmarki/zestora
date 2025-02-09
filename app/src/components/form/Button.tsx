import React from "react";
import Base, { BaseProps } from "../Base";

export type ButtonProps = BaseProps;

const Button: React.FC<ButtonProps> = (props) => {
  return <Base as="button" {...props} />;
};

export default Button;
