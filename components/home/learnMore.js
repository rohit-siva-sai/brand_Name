import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from 'react-icons/ri';

const LearnMore = () => {
  return (
    <div>
      <div className="bg-[#232f3e] flex flex-col py-10 justify-center items-center space-y-8 ">
        <p className="font-bold text-3xl text-white  w-3/4 text-center">
          “95% of all equipment and supplies I need, I have been able to find
          and order from Amazon Business.”
        </p>
        <p className="text-white text-sm font-medium">
          — Nagaraj K Chinnappaiah, Procurement Specialist, Carl Zeiss India
          (Bangalore) Pvt. Ltd.
        </p>
      </div>
      <div className="grid grid-cols-2 py-12 place-items-center bg-[#827af0]">
        <picture>
            <img src="https://static-assets.business.amazon.com/assets/global/images/square-cards/mro-square-story.png.transform/448x448/image.jpg" alt="" />
        </picture>
        <div className="flex flex-col space-y-3  w-1/2">
            <p className="text-3xl font-bold text-white">Learn more about the lakhs of Industrial & MRO supply products and thousands of brands that you can access in our selection.</p>
            <Link href={""}>
                <div className="text-white flex space-x-1 font-medium items-center">
                    <p className="decoration-1 hover:underline" >Start exploring our selection</p>
                  <RiArrowRightSLine className="" size={20}/>
                </div>
            </Link>
        </div>
      </div>
      <div className="bg-[#232f3e] flex flex-col py-10 justify-center items-center space-y-4 ">
        <p className="font-semibold text-3xl text-white  text-center">
          Need to purchase in bulk for your business?
        </p>
        <p className="text-white text-2xl font-medium">
          Write to us at: buybulk@amazon.com for assistance
        </p>
      </div>
    </div>
  );
};

export default LearnMore;
