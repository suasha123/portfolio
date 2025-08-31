import { Profile } from "./Profilelink";
import { TechStack } from "./techstack";
import { Project } from "./Project";
import { Achievements } from "./Achievemnts";
export const Hero = () => {
  return (
    <section className="flex flex-col gap-4 justify-center items-center  px-8 sm:px-12 md:px-12 lg:px-16 py-8">
      <div className="flex flex-row justify-between items-center lg:flex-row lg:justify-between lg:items-center w-full max-w-[1024px] gap-4">
        <h1 className="text-white text-[18px] sm:text-[24px] md:text-4xl lg:text-5xl font-semibold">
          Hi, I am <span className="text-indigo-400">Surya Pratap Singh</span>
        </h1>

        <div className="w-18 h-18 hidden sm:block sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-30 lg:h-30 border-4 border-[#c961c2] rounded-full flex justify-center items-center">
          <img
            src="/suryaprofile.jpg"
            alt="Surya PIC"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      <p className="w-full max-w-[1024px] text-gray-400 text-sm sm:text-base lg:text-lg mt-2">
        I'm a{" "}
        <span className="font-medium text-white">MERN stack developer</span>{" "}
        focusing on creating full-stack solutions and exploring{" "}
        <span className="text-[#c319a4] font-medium ">
          AI-powered backend systems
        </span>
        .
      </p>
       <div className="mt-4 flex justify-center">
        <a
          href="https://drive.google.com/file/d/1V5JaYrg6E3HU1oTkJ1jOfcyXfoWAzt0-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-full bg-transparent hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]"
        >
          View Resume
        </a>
      </div>
      <Profile />
      <Project />
      <TechStack />
      <Achievements />
    </section>
  );
};
