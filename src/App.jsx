import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "/src/components/Navbar";
import Hero from "./components/Hero";
import Quotation from "./components/Quotation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Hero />
            <Quotation />

            <div className="ml-[11%] mt-[7%] mb-[3%] text-white font-bold text-4xl flex" id="projects">
                <h1>
                    <span className="text-[#C778DD]">#</span>projects
                </h1>
                <div className="h-[1px] w-[70%] border-1 border-[#C778DD] ml-5 mt-5"></div>
            </div>

            <div className="w-[90%] mx-auto flex justify-center items-center sm:flex-row flex-col">
                <Projects
                    title="LMS"
                    description="LMS is a learning management system for schools and universities. It is designed to help teachers and students manage their courses, assignments, and grades."
                    stack="Laravel, Blade, PusherJS, Filament, Vite, TailwindCSS"
                    imgSrc="./src/assets/LMS.PNG"
                    hasLink={false}
                    link="https://agra-coding.me"
                />
                                <Projects
                    title="Agra"
                    description="Agra is a gamified learning management system for Java and C# programming languages. It is designed to help students learn programming languages in a fun and interactive way. You can login by these credentials: student1@example.com and password: password"
                    stack="Laravel, Blade, PusherJS, Filament, Mix, TailwindCSS"
                    imgSrc="./src/assets/Agra.PNG"
                    hasLink={true}
                    link="https://agra-coding.me"
                />
                <Projects
                    title="Aquaters"
                    description="Interstellar is a space-themed game where players can explore the galaxy, fight against aliensm, and compete in the leaderboards. It is created using C# and Unity game engine."
                    stack="C#, Unity, Visual Studio"
                    imgSrc="./src/assets/Aquaters.PNG"
                    hasLink={true}
                    link="https://github.com/kairo-18/Aquaters"
                />
                                <Projects
                    title="Interstellar"
                    description="Interstellar is a space-themed game where players can explore the galaxy, fight against aliensm, and compete in the leaderboards. It is created using C# and Unity game engine."
                    stack="C#, Unity, Visual Studio"
                    imgSrc="./src/assets/interstell.JPG"
                    hasLink={true}
                    link="https://agra-coding.me"
                />
            </div>

            <Skills />
            <About />
            <Contact />
        </>
    );
}

export default App;
