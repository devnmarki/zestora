import React from "react"
import ReactDOM from "react-dom";

type ModalProps = {
    children?: React.ReactNode;
    open?: boolean;
}

const Modal = ({ children, open }: ModalProps) => {
    if (!open) return null;
    
    return ReactDOM.createPortal(
        <div>{children}</div>, 
        document.getElementById("modal-root") as Element
    );
}

export default Modal;