import Image from "next/image";
import React from "react";
import Button from "./button";
import img from "../../../public/images/card.jpg";
import { RiReactjsLine } from "react-icons/ri";
const Card = () => {
  return (
    <div className="">
      <h3 className="flex items-center mb-4 gap-3 text-base">
        <span className="text-[#615FFF] font-bold">{"Project 1"}</span>
        <span className="text-[#90A1B9]">{" // _ui-animations"}</span>
      </h3>
      <div className="border border-[#1D293D] rounded-2xl overflow-hidden">
        <div className="h-[145px] relative">
          <div className="absolute right-5 top-5 bg-[#A3B3FF] rounded">
            <RiReactjsLine className="w-5 h-5 p-1"/>
          </div>
          <Image src={img} alt="Card image" className="w-full" />
        </div>
        <div className="p-8 bg-[#020618] border-t border-[#1D293D]">
          <p className="text-[#90A1B9] mb-[21px] text-lg max-w-[343px] w-full">
            Duis aute irure dolor in velit esse cillum dolore.
          </p>
          <Button title="view-project" type="button" />
        </div>
      </div>
    </div>
  );
};

export default Card;
