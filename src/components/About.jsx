import React from "react";

const About = () => {
    return (
        <div id="about">
            <div>
                <div className="ml-[11%] mt-[7%] mb-[3%] text-white font-bold text-4xl flex">
                    <h1>
                        <span className="text-[#C778DD]">#</span>about-me
                    </h1>
                    <div className="h-[1px] w-[50%] border-1 border-[#C778DD] ml-5 mt-5"></div>
                </div>
            </div>

            <div className="sm:flex"> 
                <p className="sm:w-[30%] w-[70%] ml-[12%] text-[#ABB2BF] text-justify text-lg ">
                    Hi there! I'm John Doe.
                    <br></br>
                    <br></br>
                    A full-stack web developer based in Caloocan City. I have a passion for web development and love to create websites and web applications that are both functional and visually appealing.
                    <br></br>
                    <br></br>

                    I have experience working with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and MySQL. 
                    When I'm not coding, you can find me exploring the city, trying out new restaurants, or playing video games. I'm always looking for new opportunities to learn and grow as a developer, so feel free to reach out if you'd like to collaborate on a project or just chat about web development!
                </p>

                <div className="sm:w-[30%] w-[70%] ml-[12%] mt-5 relative">
                    <img src="src/assets/profilehero.png" className="w-[100%] rounded-full sm:absolute sm:top-[-100px]"/>
                    <img src="src/assets/Dots.png" alt="Dots" className="sm:absolute right-5 sm:flex hidden" />
                    <img src="src/assets/rectangle.png" alt="rectangle" className="sm:absolute left-5 bottom-0 sm:flex hidden" />
                </div>
            </div>
            
        </div>
    );
};

export default About;
