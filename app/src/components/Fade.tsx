import ReactDOM from "react-dom";

const Fade = () => {
    return ReactDOM.createPortal(
        <div className="w-screen h-screen bg-black opacity-50 absolute top-0 left-0"></div>,
        document.getElementById("fade-root") as Element
    )
}

export default Fade;