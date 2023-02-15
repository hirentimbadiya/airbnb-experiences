import React from "react";
import { Buttons } from "../constants";
const ButtonsGrp = () => {
  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex">
        {Buttons.fThree.map((button, index) => {
          return (
            <div
              key={index}
              className={`inline-block whitespace-nowrap rounded-[30px] font-poppins
          cursor-pointer  border-gray p-1 mr-[12px] hover:border-primary 
          border-[0.5px] text-center h-[33px] justify-center items-center tracking-wider`}
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
      <div class="_1q59bef" aria-hidden="true"></div>
      <div className="flex  overflow-auto">
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
