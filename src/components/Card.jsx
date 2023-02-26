import React from "react";
import Trips from "./Trips";
import TopSellers from "./TopSellers";
import GreatGroups from "./GreatGroups";
import WeekendPlan from "./WeekendPlan";
const Card = () => {
  return (
    <div>
      <div>
        <div className="text-primary mt-5 mb-4">
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
        <div className="text-primary mt-5 mb-4">
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
        <div className="text-primary mt-5 mb-4">
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
        <div className="text-primary mt-5 mb-4">
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
