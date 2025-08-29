import { Profile } from "../ProfilleLink/page";
export const Hero = () => {
  return (
    <section className="flex  flex-col  gap-4 justify-center items-center p-8">
      <div className="flex w-[70%] lg:w-[60%] sm:w-[80%] justify-between items-center">
        <h1 className="text-white text-3xl sm:text-4xl font-semibold">Hi , I am <span className="text-indigo-400">Surya Pratap Singh</span></h1>
        <div className="w-20 h-20  border border-white border-5  rounded-full  flex justify-center items-center relative">
          <img
            src="/suryaprofile.jpg"
            alt="Surya PIC"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <p className="w-[70%] lg:w-[60%] sm:w-[80%]   text-gray-400 text-lg sm:text-xl">
        I'm a <span className="font-medium text-white">MERN stack developer</span> focusing on creating full-stack solutions and exploring <br/> <span className="text-indigo-400 font-medium">AI-powered backend systems</span>.
      </p>
      <Profile />
    </section>
    
  );
};
