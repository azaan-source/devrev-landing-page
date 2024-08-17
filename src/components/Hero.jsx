import React from "react";
import Typewriter from "./Typewriter";
import hero from "../assets/hero.webp";
import hundredms from "../assets/100ms.svg";
import bajaj from "../assets/bajaj.svg";
import bb from "../assets/bb.webp";
import yellow from "../assets/yellow.webp";
import goodMettings from "../assets/goodMeetings.svg";
const Hero = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-2">
      <div className=" flex flex-col justify-center items-center p-20 gap-4">
        <div className="">
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
        <div>
          <button class="flex items-center bg-blue-600 hover:bg-blue-950 text-white  py-2 px-4 rounded">
            <span className="font-thin">Start free trial </span>
            <svg
              class="w-3 h-3 ml-2"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15 8 .354.354.353-.354-.353-.354L15 8ZM1 8.5h14v-1H1v1Zm6.646-7.146 7 7 .708-.708-7-7-.708.708Zm7 6.292-7 7 .708.708 7-7-.708-.708Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <img src={hero} alt="" className="max-w-full h-auto" />
        </div>
        <div id="tagline" className="p-2 mt-8">
          <p className="font-mono text-xl">
            Join the 1000+ companies benefiting from an AI-first experience
          </p>
        </div>
      </div>
      <div id="logos " className="logos mb-10">
        <div className="logo-slide  inline-block ">
          <img
            src={hundredms}
            alt="Hundred MS"
            className="h-auto max-w-full sm:h-12 w-auto inline-block mx-4"
          />
          <img
            src={bajaj}
            alt="Bajaj"
            className=" h-auto max-w-full sm:h-12 w-auto inline-block mx-4"
          />
          <img
            src={bb}
            alt="Bajaj"
            className=" h-auto max-w-full sm:h-12 w-auto inline-block mx-4"
          />
          <img
            src={yellow}
            alt="Bajaj"
            className=" h-auto max-w-full sm:h-12 w-auto inline-block mx-4"
          />
          <img
            src={goodMettings}
            alt="Bajaj"
            className=" h-auto max-w-full sm:h-12 w-auto inline-block mx-4"
          />
        </div>
        <div className="logo-slide inline-block">
          <img
            src={hundredms}
            alt="Hundred MS"
            className=" h-auto max-w-full"
          />
          <img
            src={yellow}
            alt="Bajaj"
            className=" h-auto max-w-full sm:h-12 w-auto inline-block mx-4"
          />
          <img
            src={bajaj}
            alt="Bajaj"
            className=" h-auto max-w-full sm:h-12 w-auto inline-block mx-4"
          />
          <img
            src={bb}
            alt="Bajaj"
            className=" h-auto max-w-full sm:h-12 w-auto inline-block mx-4"
          />

          <img
            src={goodMettings}
            alt="Bajaj"
            className=" h-auto sm:h-12 w-auto inline-block mx-4"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
