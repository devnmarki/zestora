import { Button } from "..";
import { TransitionTypes } from "../enums";

const Login = () => {
    return (
        <>
            <Button 
                width="150px" 
                height="50px" 
                backgroundColor="#3270F5"
                rounded="10px"
                textColor="#FFFFFF"
                opacity={1}
                transition={{ base: { type: TransitionTypes.Opacity, duration: 100 }}}
                hover={{
                    opacity: 0.75
                }}
                active={{
                    opacity: 0.5
                }}
            >Primary</Button>
            
            <Button 
                width="150px" 
                height="50px" 
                backgroundColor="#DCE4EE"
                rounded="10px"
                border="2px"
                borderColor="#3270F5"
                textColor="#3270F5"
                transition={{ base: { type: TransitionTypes.All, duration: 100 } }}
                hover={{
                    border: "none",
                    backgroundColor: "#3270F5",
                    color: "#FFFFFF"
                }}
                active={{
                    opacity: 0.75
                }}
            >Secondary</Button>
        </>
    )
}

export default Login;