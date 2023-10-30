import React from "react";
import { FaPaw } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mt-[5rem] bg" id="home">
      <div className="brand-container h-[80vh]">
        <div className=" flex-col flex gap-6  leading-normal py-20">
          {/* title */}
          <div className="flex flex-col leading-normal gap-3 pt-[5rem]">
            <h1 className="text-[35px] text-white font-medium">
              Feeling Better
            </h1>
            <h1 className="text-[35px] font-bold text-white">
              With Your Little
            </h1>
            <h1 className="text-[red] font-bold text-[35px] flex gap-3">
              Friends <span className="text-white"><FaPaw/></span>
            </h1>
          </div>
          <div className="">
            <p className="font-semibold text-[18px] text-justify xl:w-[22rem] lg:w-[22rem] md:w-full w-full leading-normal text-white">
              The Dog is a small carnivorous animal . it is only species in the
              Family Felidae and often referred to ....
            </p>
          </div>
          <div>
            <button className="text-white bg-[red] px-5 py-3 rounded-2xl font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
