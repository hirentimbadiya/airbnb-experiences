import React from "react";
import Zoom from "react-reveal/Zoom";
import { HeroData } from "../constants";
const Hero = () => {
  return (
    <section className={`flex flex-col `}>
      <div className="w-full">
        <div className="w-full flex flex-nowrap gap-4 ">
          {HeroData.map((card, index) => (
            <div key={card.id}>
              <Zoom>
                <div className=" flex h-[350px] w-[600px] msm:h-[400px] msm:w-[400px] mss:w-[300px] relative rounded-xl ">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[100%] h-[100%] rounded-xl block absolute object-cover msm:object-cover z-0"
                  />
                  <div className="z-[1] text-black p-4">
                    <h3 className="text-white font-poppins">Collection</h3>
                    <div className="flex max-w-[70%]">
                      <h1 className="text-white font-poppins text-[20px] font-semibold">
                        {card.title}
                      </h1>
                    </div>
                    <button
                      className=" mt-48 text-primary font-poppins
               bg-white rounded-md w-[80px] p-1 font-medium hover:bg-slate-100
                shadow-xl"
                    >
                      Show all
                    </button>
                  </div>
                </div>
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
