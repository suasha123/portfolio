import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

export const Profile = () => {
  return (
    <section className="flex gap-6 mt-10 md:mt-20 bg-gray-900 p-4 rounded-[15px]">
      <a 
        href="https://www.linkedin.com/in/surya-pratap-singh-b2a48a249/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer text-[28px] sm:text-[40px] md:text-[50px] text-blue-500 hover:text-blue-400 transition-colors duration-300"
      >
        <FaLinkedin />
      </a>

      <a 
        href="https://leetcode.com/u/suryaprataps471/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer text-[28px] sm:text-[40px] md:text-[50px] text-orange-500 hover:text-orange-400 transition-colors duration-300"
      >
        <SiLeetcode />
      </a>

      <a 
        href="https://github.com/suasha123" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer text-[28px]  sm:text-[40px] md:text-[50px] text-gray-300 hover:text-white transition-colors duration-300"
      >
        <FaGithub />
      </a>

      <a 
        href="mailto:suryaprataps471@gmail.com" 
        className="cursor-pointer text-[28px] sm:text-[40px]  md:text-[50px] text-red-500 hover:text-red-400 transition-colors duration-300"
      >
        <IoMdMail />
      </a>

      <a 
        href="https://www.instagram.com/suryaprataps471" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer text-[28px] sm:text-[40px] md:text-[50px]  text-pink-500 hover:text-pink-400 transition-colors duration-300"
      >
        <FaInstagram />
      </a>
    </section>
  );
};
