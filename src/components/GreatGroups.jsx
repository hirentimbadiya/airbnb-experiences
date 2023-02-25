import React from 'react'
import { GreatForGrp, TopSellerSlider } from "../constants";
import StarIcon from "@mui/icons-material/Star";
const GreatGroups = () => {
  return (
    <div>
        <>
      <div className="text-primary mt-5">
        <h1
          className={`font-poppins w-full text-[20px] font-bold text-primary leading-9`}
        >
          Great For Groups
        </h1>
      </div>
      <div className="flex gap-6">
        {GreatForGrp.map((card) => (
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
      </div>
    </>
    </div>
  )
}

export default GreatGroups