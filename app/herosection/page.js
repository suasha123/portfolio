export const Hero = () => {
  return (
    <section className="flex  flex-col  gap-4 justify-center items-center p-8">
      <div className="flex w-[70%] lg:w-[60%] sm:w-[80%] justify-between items-center">
        <h1 className="text-white text-2xl ">Hi , I'm Surya Pratap Singh</h1>
        <div className="w-20 h-20  border border-white border-5  rounded-full  flex justify-center items-center relative">
          <img
            src="/suryaprofile.jpg"
            alt="Surya PIC"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="w-[70%] lg:w-[60%] sm:w-[80%] text-[#979191]">
        I'm a MERN stack developer focusing on creating full-stack solutions and exploring AI-powered backend systems.
      </div>
    </section>
  );
};
