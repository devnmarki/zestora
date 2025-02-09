import { NavigateFunction, useNavigate } from "react-router-dom";
import HeroImage from "/images/hero.svg";

const Hero = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-y-[40px] md:gap-x-[50px] lg:gap-x-[132px] w-full px-[20px] mt-[40px] md:mt-[100px]">
            <img src={HeroImage} alt="Hero" className="w-[333px] xl:w-[524px]" />

            <div className="flex justify-center items-center md:items-start flex-col gap-y-[10px] w-[335px] text-center md:text-left">
                <h1 className="text-[48px] font-bold leading-tight">Buy, Sell, and Thrive – All in One Place.</h1>
                <p className="font-light leading-normal text-gray-300">Zestora connects creators, sellers, and buyers in a seamless marketplace.</p>
                <div className="flex gap-x-[10px]">
                    <button onClick={() => navigate("/login")} className="w-[150px] h-[50px] bg-blue text-offwhite rounded-[10px] transition-opacity duration-100 hover:opacity-75">Explore Products</button>
                    <button onClick={() => navigate("/signup")} className="w-[150px] h-[50px] border-[2px] border-blue text-blue rounded-[10px] transition-colors duration-100 hover:bg-blue hover:border-none hover:text-offwhite">Start Selling</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;