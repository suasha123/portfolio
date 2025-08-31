import { Tilt } from "react-tilt";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
export const TechStack = ()=>{
     const techStack = [
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: RiNextjsLine },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "Python", icon: FaPython },
  ];
  const customOptions = {
    reverse: true,
    max: 45,
    perspective: 1500,
    scale: 1.2,
    speed: 2000,
    transition: true,
    axis: "X",
    reset: true,
    easing: "cubic-bezier(.2, .8, .3, 1)",
  };
    return (
        <section className="w-full max-w-[1024px] mt-12 flex flex-col gap-8">
        <div
          className="relative flex flex-row justify-center items-center w-max px-8 py-4 
                  rounded-xl border border-purple-500/60 shadow-[0_0_15px_#a855f7] mx-auto"
        >
          <h1 className="text-purple-400 text-[18px] sm:text-[24px] md:text-3xl lg:text-4xl font-semibold">
            Tech Stack
          </h1>
        </div>
        <div className="w-[100%] flex  justify-center flex-wrap gap-8">
          {techStack.map((tech, index) => (
            <Tilt key={index} options={customOptions}>
              <div
                key={index}
                className="flex flex-col justify-center gap-4 items-center w-[20%]  cursor-pointer min-w-[200px] p-4 
             rounded-[10px] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
              >
                <tech.icon
                  className={`text-[40px] ${
                    tech.name === "JavaScript"
                      ? "text-yellow-400"
                      : tech.name === "MongoDB"
                      ? "text-green-500"
                      : tech.name === "Node.js"
                      ? "text-green-600"
                      : tech.name === "Express.js"
                      ? "text-gray-200"
                      : tech.name === "React"
                      ? "text-cyan-400"
                      : tech.name === "Next.js"
                      ? "text-white"
                      : tech.name === "Tailwind CSS"
                      ? "text-teal-400"
                      : tech.name === "Python"
                      ? "text-blue-500"
                      : "text-red-500"
                  }`}
                />
                <span className="text-white">{tech.name}</span>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    )
}