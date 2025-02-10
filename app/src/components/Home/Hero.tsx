import HeroImage from "/images/hero.svg";
import { PrimaryButton, SecondaryButton } from "../..";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-y-[40px] md:gap-x-[50px] lg:gap-x-[132px] w-full px-[20px] mt-[40px] md:mt-[100px]">
            <img src={HeroImage} alt="Hero" className="w-[333px] xl:w-[524px]" />

            <div className="flex justify-center items-center md:items-start flex-col gap-y-[10px] w-[335px] text-center md:text-left">
                <h1 className="text-[48px] font-bold leading-tight">Buy, Sell, and Thrive – All in One Place.</h1>
                <p className="font-light leading-normal text-gray-300">Zestora connects creators, sellers, and buyers in a seamless marketplace.</p>
                <div className="flex gap-x-[10px]">
                    <PrimaryButton width="150px" url="/login" >Explore Products</PrimaryButton>
                    <SecondaryButton width="150px" url="/signup">Start Selling</SecondaryButton>
                </div>
            </div>
        </div>
    )
}

export default Hero;