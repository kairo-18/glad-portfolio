import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="flex flex-col-reverse lg:ml-[11%] sm:mt-[5%] mt-[10%] text-center sm:text-left text-white sm:flex-row">
            <div className="lg:w-[40%] mx-[5%] mt-[5%]">
                <h1 className="font-bold text-[32px]">
                    Glad is a student{" "}<br />
                    <span className="text-[#C778DD]">
                        {" "}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Full Stack Developer",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Frontend Developer",
                                1000,
                                "Backend Developer",
                                1000,
                                "Based in the Philippines",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: "inline-block" }}
                            repeat={Infinity}
                        />
                    </span>
                </h1>

                <p className="text-[#ABB2BF] mt-[5%]">
                    I develop responsive, beautiful, and functional websites{" "}
                    <br></br>that bring users in.
                </p>
                <br></br>
                <a
                    className="border-1 border-[#C778DD] p-2 px-5 rounded-2xl mt-[5%]"
                    href="mailto:gladimirdungo@gmail.com"
                >
                    Contact me
                </a>
            </div>
            <div className="relative ml-[5%]">
                <img
                    className="sm:w-[200px] absolute sm:top-[10%] sm:left-[-100px] left-10"
                    src={"/assets/rectangle.png"}
                    alt="Rectangle"
                />
                <img
                    className="sm:w-[150px] absolute sm:right-[70px] right-10 bottom-13"
                    src={"/assets/Dots.png"}
                    alt="Dots"
                />
                <img
                    className="sm:w-[550px] relative z-10 lg:left-0 left-[10%]"
                    src={"assets/profilehero.png"}
                ></img>
                <div className="relative border-1 p-2 px-5 lg:left-[-100px] left-[-4%] bottom-[-10px] flex">
                    <div className="w-[21px] h-[21px] bg-[#C778DD] mr-5"></div>
                    <span>Gladimir Dungo - a passionate com scie student.</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
