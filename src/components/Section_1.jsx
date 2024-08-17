import React from "react";
import icon_1 from "../assets/icon_1.svg";
import icon_2 from "../assets/icon_2.png";
import icon_3 from "../assets/icon_3.png";
import section_1 from "../assets/section_1.svg";
import section1_2 from "../assets/section1_2.svg";
const Section_1 = () => {
  return (
    <div className="bg-[rgba(25,25,25)] flex flex-col">
      <div id="s1" className="   p-16 gap-10">
        <div className="flex flex-col">
          <div className="">
            <span className="bg-[hsla(0,0%,100%,.15)] p-1 rounded-md shadow-md">
              <span className="font-unica text-xs leading-3 tracking-[0.2rem] text-white">
                BENEFITS
              </span>
            </span>
          </div>
          <p className="text-white mt-2 sm:text-xl md:text-4xl">
            Focus on what's essential<br></br>
            <span className="font-mono text-xl text-gray sm:text-xl md:text-4xl">
              Less = Better
            </span>
          </p>
          <button class="flex items-center bg-blue-700 hover:bg-blue-950 text-white  py-2 px-4 rounded w-28 mt-2">
            <span className="font-thin">Sign up </span>
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
          <div className="flex md:flex-row flex-col md:gap-20  justify-between ">
            <div>
              <p className=" text-white sm:text-xl md:text-3xl ">
                Deliver exceptional customer experience <br />
                <span className="font-mono text-xl text-gray sm:text-base ">
                  Don’t tradeoff self service and CX
                </span>
              </p>

              <div className="flex flex-col items-start">
                <p className="mt-10 text-white font-mono text-xl md-8">
                  Gen-AI powered in-app search, live chat,
                  <br /> and nudges with just a few lines of code
                </p>

                <div className="flex flex-row mt-4 justify-center items-center">
                  <img src={icon_1} alt="icon_d" />
                  <p className="text-gray text-xl ml-4">
                    Gen AI powered search and nudges (free)
                  </p>
                </div>
                <div className="flex flex-row mt-4 justify-center items-center">
                  <img src={icon_2} alt="icon_d" />
                  <p className="text-gray text-xl ml-4">
                    AI agent live chat (answer and assist)
                  </p>
                </div>
                <div className="flex flex-row mt-4 justify-center items-center">
                  <img src={icon_3} alt="icon_d" />
                  <p className="text-gray text-xl ml-4">
                    Fine tuning for continuous learning
                  </p>
                </div>
              </div>
            </div>
            <div id="section_1_right mt-8">
              <div className="flex items-center justify-center bg-black rounded-lg p-4 md:p-8 ">
                <img
                  src={section_1}
                  alt=""
                  className="w-full h-auto  max-h-[20rem] md:w-[572px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray my-8 mx-16"></div>
      <div className="flex md:flex-row flex-col md:gap-20  justify-between p-16">
        <div>
          <p className=" text-white sm:text-xl md:text-3xl ">
            Empower support and product teams <br />
            <span className="font-mono text-xs text-gray sm:text-base ">
              Align technical support with product and engineering
            </span>
          </p>

          <div className="flex flex-col items-start">
            <p className="mt-10 text-white font-mono text-xl md-8">
              Prioritize smarter to solve customer <br /> problems faster
            </p>

            <div className="flex flex-row mt-4 justify-center items-center">
              <img src={icon_1} alt="icon_d" />
              <p className="text-gray text-xl ml-4">
                Automate tier 2 support processes
              </p>
            </div>
            <div className="flex flex-row mt-4 justify-center items-center">
              <img src={icon_2} alt="icon_d" />
              <p className="text-gray text-xl ml-4">
                Reduce debugging and root cause <br /> analysis time
              </p>
            </div>
            <div className="flex flex-row mt-4 justify-center items-center">
              <img src={icon_3} alt="icon_d" />
              <p className="text-gray text-xl ml-4">
                Cluster customer feedback to uncover <br /> insights
              </p>
            </div>
          </div>
        </div>
        <div id="section_1_right mt-8">
          <div className="flex items-center justify-center bg-black rounded-lg p-4 md:p-8 ">
            <img
              src={section1_2}
              alt=""
              className="w-full h-auto  max-h-[20rem] md:w-[572px]"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray my-8 mx-16"></div>
    </div>
  );
};

export default Section_1;
