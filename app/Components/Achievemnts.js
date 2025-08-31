export const Achievements = () => {
  const achievements = [
    {
      img: "/codevita.png",
      title: "TCS CODEVITA S12",
      desc: "Secured a global rank of 630th in tcs codevita s12",
      link: "https://drive.google.com/file/d/1nDcWASehFfY4S_dVgScCcMtZUV22tkVx/view?usp=sharing",
    },
    {
      img: "/codeclash.png",
      title: "Code Clash Certificate",
      desc: "Secured rank 123 in coding battle organised by Let'S Code Community on unstop",
      link: "https://drive.google.com/file/d/1JYkEnEKU4VkWqPGYktTLB67zWxkhV0zg/view?usp=sharing",
    },
    {
      img: "https://via.placeholder.com/300x180",
      title: "Secured 1st rank in Bit-By-Bit Challenge",
      desc: "Secured 1st rank in bit by bit challenge organised by Binary Brains (technical club of my college)",
    },
  ];

  return (
    <section className="w-full px-6 py-16">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-5xl font-bold text-[#7c86ff]">Achievements</h1>
      </div>

      <div className="flex overflow-x-auto space-x-6 px-2 pb-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800 snap-x snap-mandatory">
        {achievements.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (item.link) {
                window.location.href = item.link;
              }
            }}
            className="min-w-[300px] w-[384px] snap-center bg-gradient-to-br from-gray-900 to-black border border-purple-700 rounded-2xl shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
