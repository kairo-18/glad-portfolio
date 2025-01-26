import React from "react";

const Skills = () => {
    return (
        <div>
            <div>
                <div className="ml-[11%] mt-[7%] mb-[3%] text-white font-bold text-4xl flex">
                    <h1>
                        <span className="text-[#C778DD]">#</span>skills
                    </h1>
                    <div className="h-[1px] w-[60%] border-1 border-[#C778DD] ml-5 mt-5"></div>
                </div>
            </div>

            <div className="flex justify-center gap-5 items-center sm:flex-row flex-col ml-[7%] mr-[10%]">

            <div className="relative">
                <div className="w-[400px] sm:w-[500px] h-[500px]">
                    <img className="w-full h-full rounded-2xl" src={"/assets/laptop.png"} alt="Symposium" />
                </div>

                <div className="absolute top-0">
                    <img className="p-5" src={"/assets/Dots.png"} alt="Dots" />
                </div>

                <div className="absolute bottom-0">
                    <img className="p-5" src={"/assets/rectangle.png"} alt="Dots" />
                </div>


                <div className="absolute bottom-0 right-0">
                    <img className="p-5" src={"/assets/Dots.png"} alt="Dots" />
                </div>
            </div>

            <div className="sm:flex gap-10 p-10 w-full sm:w-auto text-black">

                <div className="w-[100%] sm:w-[200px] mt-5 ">
                <div className="border-1 border-white mb-5 text-white shadow-[5px_5px_rgba(199,120,221,0.8),_10px_10px_rgba(199,120,221,0.6),_15px_15px_rgba(199,120,221,0.4),_20px_20px_rgba(199,120,221,0.2),_25px_25px_rgba(199,120,221,0.1)]">
                    <h1 className="font-bold p-3 border-b-1">#Languages</h1>
                    <ul className="list-none p-3">
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>C#</li>
                    </ul>
                    </div>
                </div>

                <div className="w-[100%] sm:w-[200px] border-white mt-5">
                    <div className="border-1  border-white mb-5 text-white shadow-[5px_5px_rgba(199,120,221,0.8),_10px_10px_rgba(199,120,221,0.6),_15px_15px_rgba(199,120,221,0.4),_20px_20px_rgba(199,120,221,0.2),_25px_25px_rgba(199,120,221,0.1)]">
                        <h1 className="font-bold p-3 border-b-1">#Databases</h1>
                        <ul className="list-none p-3">
                            <li>MySql</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div className="border-1 border-white text-white shadow-[5px_5px_rgba(199,120,221,0.8),_10px_10px_rgba(199,120,221,0.6),_15px_15px_rgba(199,120,221,0.4),_20px_20px_rgba(199,120,221,0.2),_25px_25px_rgba(199,120,221,0.1)]">
                        <h1 className="font-bold p-3 border-b-1 text-white">#Tools</h1>
                        <ul className="list-none p-3">
                            <li>VS Code</li>
                            <li>PHP Storm</li>
                            <li>Figma</li>
                            <li>Adobe Tools</li>
                        </ul>
                    </div>
                </div>

                <div className="w-[100%] sm:w-[200px]  border-white mt-5">
                    <div className="border-1  border-white mb-5 text-white shadow-[5px_5px_rgba(199,120,221,0.8),_10px_10px_rgba(199,120,221,0.6),_15px_15px_rgba(199,120,221,0.4),_20px_20px_rgba(199,120,221,0.2),_25px_25px_rgba(199,120,221,0.1)]">
                        <h1 className="font-bold p-3 border-b-1">#Front-End</h1>
                        <ul className="list-none p-3">
                            <li>React</li>
                            <li>Blade</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TailwindCSS</li>
                            <li>Framer Motion</li>
                        </ul>
                    </div>
                    <div className="border-1 border-white mb-5 text-white shadow-[5px_5px_rgba(199,120,221,0.8),_10px_10px_rgba(199,120,221,0.6),_15px_15px_rgba(199,120,221,0.4),_20px_20px_rgba(199,120,221,0.2),_25px_25px_rgba(199,120,221,0.1)]">
                        <h1 className="font-bold p-3 border-b-1 ">#Back-End</h1>
                        <ul className="list-none p-3">
                            <li>Laravel</li>
                            <li>PHP</li>
                            <li>Node</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    
                </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
