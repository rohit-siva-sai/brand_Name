import React from "react";
import { HiTruck } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiHandHeartFill } from "react-icons/ri";
import { MdHeadsetMic } from "react-icons/md";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0  w-full z-40 bg-white" >
      <div className="flex justify-center divide-x space-x-4 px-4 py-4  border items-center">
        <div className="flex pl-3 flex-col items-start w-1/2 ">
          <HiTruck className="text-xl " />
          <p className="text-sm font-bold text-gray-600">Great Value</p>
          <p className="text-xs font-semibold text-gray-400">
            Most <span className="text-gray-700"> popular brands</span> with
            widest range of selection{" "}
            <span className="text-gray-700">at best prices</span>{" "}
          </p>
        </div>
        <div className="flex pl-3 flex-col items-start w-1/2 ">
          <HiTruck className="text-xl " />
          <p className="text-sm font-bold text-gray-600">NationWide Delivery</p>
          <p className="text-xs font-semibold text-gray-400">
            Over 20000 pincodes <span className="text-gray-700"> serviceable across India</span> 
          </p>
        </div>
        <div className="flex pl-3 flex-col items-start w-1/2 ">
          <HiTruck className="text-xl " />
          <p className="text-sm font-bold text-gray-600">Secure Payment</p>
          <p className="text-xs font-semibold text-gray-400">
            Partnered with India&#39;s <span className="text-gray-700">most popular and secure</span> payment solutions
            
          </p>
        </div>
        <div className="flex pl-3 flex-col items-start w-1/2 ">
          <RiHandHeartFill className="text-xl " />
          <p className="text-sm font-bold text-gray-600">Buyer Protection Value</p>
          <p className="text-xs font-semibold text-gray-400">
            Committed to buyer intrests to provide a smooth shopping experience 
          </p>
        </div>
        <div className="flex  pl-3 flex-col items-start w-1/2 ">
          <MdHeadsetMic className="text-xl " />
          <p className="text-sm font-bold text-gray-600">365 Days Help Desk</p>
          <p className="text-xs font-semibold text-gray-400 flex items-center ">
            <IoLogoWhatsapp className="text-green-400 text-base" />
           <span>+91 9999049135</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
