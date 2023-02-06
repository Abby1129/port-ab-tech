import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-pink-600 py-2">Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-2">
          Abby Faigao
        </h1>
        <h2 className="text-xl sm:text-6xl font-bold text-[#8892b0] py-2">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Web Developer with a background in the culinary industry. I made the
          transition to the tech industry and became passionate with the world
          of web development. My background in the culinary industry, where
          attention to detail and creativity are essential, will serve me well
          in my new career as a web developer. I am looking forward to the
          opportunity to work on new projects and to be a part of a team that is
          dedicated to creating innovative and user-friendly websites and
          applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300 ">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
