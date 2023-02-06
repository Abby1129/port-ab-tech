import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 py-2">Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-2">
          Abby Faigao
        </h1>
        <h2 className="text-xl sm:text-6xl font-bold text-[#8892b0] py-2">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aut
          laboriosam possimus sequi numquam beatae et non odit, corrupti natus
          dolores. Cumque et veritatis ipsum ipsa minus recusandae vel
          perspiciatis repellendus illum quam obcaecati quaerat beatae omnis
          numquam porro necessitatibus iure, voluptas, modi accusantium in
          quasi? Quas voluptatibus mollitia similique?
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
