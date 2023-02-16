import React from "react";
import { hero } from "../assets";
const OnlineExp = () => {
  return (
    <div>
      <div className="flex justify-center items center">
        <img src={hero} alt="" className="items-center max-w-[80%]" />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-primary text-[36px] font-poppins font-bold mb-2">
          Online Experiences
        </h1>
        <p className="font-poppins text-primary text-[16px] font-normal max-w-[350px] tracking-wider">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default OnlineExp;
