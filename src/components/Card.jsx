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
      <div className=" overflow-x-auto w-full">
        <Trips />
      </div>
      <div className="overflow-x-auto w-full">
        <TopSellers />
      </div>
      <div className="overflow-x-auto w-full">
        <WeekendPlan />
      </div>
      <div className="overflow-x-auto w-full">
        <GreatGroups />
      </div>
    </div>
  );
};

export default Card;
