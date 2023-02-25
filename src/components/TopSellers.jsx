import React from "react";
import { TopSellerSlider } from "../constants";
import StarIcon from "@mui/icons-material/Star";
import Flip from 'react-reveal/Flip';
const TopSellers = () => {
  return (
    <>
      <div className="flex gap-6">
        <Flip left>
        {TopSellerSlider.map((card) => (
          <div key={card.id}>
            <div className="w-[170px] h-[230px]">
              <img
                src={card.img}
                alt=""
                className=" rounded-md w-[170px] h-[230px]"
              />
            </div>
            <div>
              <StarIcon fontSize="10px" />
              <span className="font-poppins font-normal text-xs">
                {card.rating}({card.ratingNum}) {card.country}
              </span>
              <p className="font-poppins font-normal max-w-[170px] text-8px">
                {card.title}
              </p>
              <div className="flex items-center">
                <h2 className="font-poppins text-[14px] font-semibold">
                  From {card.price}₹
                </h2>
                <span className="font-poppins font-normal text-sm">
                  / Person
                </span>
              </div>
            </div>
          </div>
        ))}
        </Flip>
      </div>
    </>
  );
};

export default TopSellers;
