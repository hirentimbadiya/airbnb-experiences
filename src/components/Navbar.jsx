import React from "react";
import { airbnb } from "../assets";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <a href="/">
        <img src={airbnb} alt="airbnb" className="w-[128px] h-[40px]" />
      </a>
      <div className="flex justify-center items-center">
        <div className="mr-2 msm:hidden visible">
          <span
            className="mr-2 text-lg cursor-pointer font-poppins font-medium 
          text-[16px] rounded-3xl p-2 hover:bg-neutral-100 hover:shadow-md"
          >
            Airbnb your home
          </span>
          <LanguageIcon
            fontSize="medium"
            className="cursor-pointer shadow-xl"
          />
        </div>
        <div
          className="border-[1px] border-gray-400 p-2 rounded-3xl 
        cursor-pointer ml-2 hover:shadow-xl"
        >
          <MenuIcon fontSize="medium" className="" />
          <PersonIcon fontSize="medium" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
