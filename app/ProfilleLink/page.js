import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

export const Profile = () => {
  return (
    <section className="flex gap-8 mt-[20px]">
      <a 
        href="https://www.linkedin.com/in/surya-pratap-singh-b2a48a249/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <FaLinkedin size={45} className="text-blue-500 hover:text-blue-400 transition-colors duration-300" />
      </a>

      <a 
        href="https://leetcode.com/u/suryaprataps471/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <SiLeetcode size={45} className="text-orange-500 hover:text-orange-400 transition-colors duration-300" />
      </a>

      <a 
        href="https://github.com/suasha123" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <FaGithub size={45} className="text-gray-300 hover:text-white transition-colors duration-300" />
      </a>

      <a 
        href="mailto:suryaprataps471@gmail.com" 
        className="cursor-pointer"
      >
        <IoMdMail size={45} className="text-red-500 hover:text-red-400 transition-colors duration-300" />
      </a>

      <a 
        href="https://www.instagram.com/suryaprataps471" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <FaInstagram size={45} className="text-pink-500 hover:text-pink-400 transition-colors duration-300" />
      </a>
    </section>
  );
};
