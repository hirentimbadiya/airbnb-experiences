import React from "react";
import { capman, man } from "../assets";
import styles from "../style";
import StarIcon from "@mui/icons-material/Star";
import { CardsSlider, TopSellerSlider } from "../constants/index";
import { color } from "@mui/system";
import Trips from "./Trips";
import TopSellers from "./TopSellers";
import GreatGroups from "./GreatGroups";
import WeekendPlan from "./WeekendPlan";
const Card = () => {
  return (
    <div>
      <div>
        <div className="text-primary mt-5">
          <h1
            className={`font-poppins w-full text-[20px] font-bold text-primary leading-9`}
          >
            Plan a trip with help from local Hosts around the world
          </h1>
        </div>
        <div className=" overflow-x-auto w-full">
          <Trips />
        </div>
      </div>
      <div>
        <div className="text-primary mt-5">
          <h1
            className={`font-poppins w-full text-[20px] font-bold text-primary leading-9`}
          >
            Top Sellers
          </h1>
        </div>
        <div className="overflow-x-auto w-full">
          <TopSellers />
        </div>
      </div>
      <div>
        <div className="text-primary mt-5">
          <h1
            className={`font-poppins w-full text-[20px] font-bold text-primary leading-9`}
          >
            Make Plans this Weekend
          </h1>
        </div>
        <div className="overflow-x-auto w-full">
          <WeekendPlan />
        </div>
      </div>
      <div>
        <div className="text-primary mt-5">
          <h1
            className={`font-poppins w-full text-[20px] font-bold text-primary leading-9`}
          >
            Great For Groups
          </h1>
        </div>
        <div className="overflow-x-auto w-full">
          <GreatGroups />
        </div>
      </div>
    </div>
  );
};

export default Card;
