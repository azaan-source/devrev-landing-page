import React from "react";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <div className="border border-red-500 flex flex-col justify-center items-center p-20">
      <div>
        <span className="bg-gray-200 p-1 rounded-md shadow-md">
          <span className="font-unica text-xs leading-3 tracking-[0.2rem]">
            AGENT OS
          </span>
        </span>
      </div>
      <p className="text-6xl mb-5">
        Apps designed for AI,<br></br> no add-ons required
      </p>
      <div className="max-w-md">
        <p>
          <span className="font-mono text-xl text-gray">AI agents </span>
          <Typewriter />
        </p>
      </div>
    </div>
  );
};

export default Hero;
