import React from "react";
import { Buttons } from "../constants";
const ButtonsGrp = () => {
  return (
    <div className="flex flex-row justify-center w-full mb-4">
      <div className="flex mss:items-start">
        {Buttons.fThree.map((button, index) => {
          return (
            <div
              key={index}
              className={`inline-block whitespace-nowrap rounded-[30px] font-poppins
          cursor-pointer  border-gray p-1 mr-[12px] hover:border-primary 
          border-[0.5px] text-center h-[33px] justify-center items-center tracking-wider
           mss:items-start`}
            >
              <span
                className={`text-[12px] font-poppins p-[6px] font-extralight `}
              >
                {button}
              </span>
            </div>
          );
        })}
      </div>
      <div className="_1q59bef mss:hidden" aria-hidden="true"></div>
      <div className="flex overflow-auto mss:hidden">
        {Buttons.others.map((button, index) => {
          return (
            <div
              key={index}
              className={`inline-block whitespace-nowrap rounded-[30px] shadow
          hover:shadow-xl cursor-pointer font-poppins border-gray p-1 ${
            index === button.length - 1 ? "mr-[0px]" : "mr-[14px]"
          }
           text-center bg-[#F2F2F2]`}
            >
              <span
                className={`text-[12px] font-poppins font-extralight tracking-wide w-[100%]  p-[6px] `}
              >
                {button}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonsGrp;
