import HeroImage from "/images/hero.svg";
import { Center, Flex, PrimaryButton, SecondaryButton } from "../..";
import { Alignment, Axis } from "../../enums";

const Hero = () => {
    // className="flex justify-center items-center md:items-start flex-col gap-y-[10px] w-[335px] text-center md:text-left"

    return (
        <Flex 
            flexDirection={{ base: Axis.Vertical, md: Axis.HorizontalReverse }}
            justify={Alignment.Center}
            items={Alignment.Center}
            columnGap={{ md: "50px", lg: "132px" }}
            gapY="40px"
            width="100%"
            padding="20px"
            margin={{ base: "40px 0px 0px 0px", md: "100px 0px 0px 0px" }}
        >
            <img src={HeroImage} alt="Hero" className="w-[333px] xl:w-[524px]" />

            <Center 
                alignItems={{ md: Alignment.Start }} 
                flexDirection={Axis.Vertical} 
                rowGap="10px"
                width="335px"
                textAlign={{ base: Alignment.Center, md: Alignment.Start }}
            >
                <h1 className="text-[48px] font-bold leading-tight">Buy, Sell, and Thrive – All in One Place.</h1>
                <p className="font-light leading-normal text-gray-300">Zestora connects creators, sellers, and buyers in a seamless marketplace.</p>
                <div className="flex gap-x-[10px]">
                    <PrimaryButton width="150px" url="/login" >Explore Products</PrimaryButton>
                    <SecondaryButton width="150px" url="/signup">Start Selling</SecondaryButton>
                </div>
            </Center>
        </Flex>
    )
}

export default Hero;