import React from "react";
import { footerLinks, socialMedia } from "../constants";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
// getting the current year
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className=" bg-[#f6f6f3] p-8  msm:hidden">
      <div
        className="flex flex-[1.5] w-full flex-row 
        justify-between flex-wrap md:mt-0 mt-10 sm:pl-[4rem] pl-[1.5rem] "
      >
        {/* Mapping through footerLinks which got 3 main object 
          items which has title and links */}
        {footerLinks.map((foot, index) => (
          <div
            key={foot.key}
            className={`flex flex-col msm:flex-row ss:my-0 my-0 min-w-[150px]}`}
          >
            <h3 className="text-primary text-[12px] font-bold font-poppins leading-5">
              {foot.title}
            </h3>

            {/* for each link we will map through the foot which is
             inside a object-item in footerLink and it has a links object which we will use
            */}
            <ul className="list-none mt-4">
              {foot.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-noraml 
                  text-[16px] leading-[23px] text-primary
                   hover:underline cursor-pointer mt-1 
                   ${index !== foot.links.length - 1 ? "mb-2" : "mb-4"}`}
                >
                  {/* we are not providing link url only providing name */}
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="flex w-full justify-between items-center
       md:flex-row flex-col pt-6 border-t-[1px] border-t-[#403d4e]"
      >
        <p className="text-primary text-[15px] font-normal font-poppins leading-5">
          ©{year} Airbnb, Inc. ·Privacy · Terms ·Sitemap · Company · details
        </p>
        <div className="flex flex-row md:mt-0 mt-6 gap-6 cursor-pointer">
          <a href="https://www.facebook.com/AirbnbIndia">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/airbnb_in">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/airbnb/">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
