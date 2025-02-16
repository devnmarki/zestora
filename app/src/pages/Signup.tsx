import { Link } from "react-router-dom";
import { Center, Flex, Input, PrimaryButton } from "..";
import { Alignment, Axis } from "../enums";
import Logo from "/images/logo.svg";
import { Colors } from "../globals";
import { FormEvent } from "react";

const Signup = () => {
    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <Center width="100%" height="100vh">
            <Flex direction={Axis.Vertical} items={Alignment.Center} gapY="30px">
                <img src={Logo} alt="Logo" />
                <form onSubmit={handleFormSubmit}>
                    <Flex direction={Axis.Vertical} gapY="15px" width="335px">
                        <h1 className="text-[20px] text-black">Create Your Account</h1>
                    
                        <Input placeholder="Email Address..." width="100%" height="50px" color={Colors.Black} rounded="10px" />
                        <Input placeholder="Your Name..." width="100%" height="50px" color={Colors.Black} rounded="10px" />
                        <Input placeholder="Password..." width="100%" height="50px" color={Colors.Black} rounded="10px" />
                        <Input placeholder="Confirm Password..." width="100%" height="50px" color={Colors.Black} rounded="10px" />
                        <PrimaryButton width="100%" onClick={() => console.log("laaaal")}>Register</PrimaryButton>
                    
                        <p className="text-gray-200">Already have an account? <Link to="/login" className="text-black underline">Log In.</Link></p>
                    </Flex>
                </form>
            </Flex>
        </Center>
    )
}

export default Signup;