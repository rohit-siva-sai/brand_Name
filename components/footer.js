import React, { useEffect, useState } from "react";
import { HiTruck } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFolderShield2Fill } from "react-icons/ri";
import { MdHeadsetMic, MdSecurity } from "react-icons/md";
import { GiOpenFolder } from "react-icons/gi";
import FooterHome from "./homepage/footerHome";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const [extrafoot, setExtrafoot] = useState(false);

  useEffect(() => {
    let exempted = ["/"];
    if (exempted.includes(router.pathname)) {
      setExtrafoot(true);
    }
    else{
      setExtrafoot(false)
    }
  }, [router]);
  return (
    <div className={` ${extrafoot ? "relative  pt-16" : "fixed pt-0 bottom-0 left-0"}   w-full z-40 bg-white`}>
      <div className="flex justify-center divide-x space-x-4 px-4 py-4   items-center">
        <div className="flex pl-3 flex-col items-start w-1/2  space-y-1 ">
          {/* <GiOpenFolder className="text-xl " /> */}
          <picture>
            <img
              src="https://www.moglix.com/assets/img/great-value-icon.svg"
              alt=""
              className="w-5/6"
            />
          </picture>
          <p className="text-sm font-bold text-gray-600">Great Value</p>
          <p className="text-xs font-semibold text-gray-400">
            Most <span className="text-gray-700"> popular brands</span> with
            widest range of selection{" "}
            <span className="text-gray-700">at best prices</span>{" "}
          </p>
        </div>
        <div className="flex pl-3 flex-col items-start w-1/2 space-y-1 ">
          {/* <HiTruck className="text-xl " /> */}
          <picture>
            <img
              src="https://www.moglix.com/assets/img/delivery-icon.svg"
              alt=""
              className="w-5/6"
            />
          </picture>
          <p className="text-sm font-bold text-gray-600">NationWide Delivery</p>
          <p className="text-xs font-semibold text-gray-400">
            Over 20000 pincodes{" "}
            <span className="text-gray-700"> serviceable across India</span>
          </p>
        </div>
        <div className="flex pl-3 flex-col items-start w-1/2  space-y-1">
          {/* <RiFolderShield2Fill className="text-xl " /> */}
          <picture>
            <img
              src="https://www.moglix.com/assets/img/secure-payment-icon.svg"
              alt=""
              className="w-5/6"
            />
          </picture>
          <p className="text-sm font-bold text-gray-600">Secure Payment</p>
          <p className="text-xs font-semibold text-gray-400">
            Partnered with India&#39;s{" "}
            <span className="text-gray-700">most popular and secure</span>{" "}
            payment solutions
          </p>
        </div>
        <div className="flex pl-3 flex-col items-start w-1/2 space-y-1 ">
          {/* <MdSecurity className="text-xl " /> */}
          <picture>
            <img
              src="https://www.moglix.com/assets/img/buyer-protection-icon.svg"
              alt=""
              className="w-5/6"
            />
          </picture>
          <p className="text-sm font-bold text-gray-600">
            Buyer Protection Value
          </p>
          <p className="text-xs font-semibold text-gray-400">
            Committed to buyer intrests to provide a smooth shopping experience
          </p>
        </div>
        <div className="flex  pl-3 flex-col items-start w-1/2  space-y-1">
          {/* <MdHeadsetMic className="text-xl " /> */}
          <picture>
            <img
              src="https://www.moglix.com/assets/img/helpdesk-icon.svg"
              alt=""
              className="w-5/6"
            />
          </picture>
          <p className="text-sm font-bold text-gray-600">365 Days Help Desk</p>
          <p className="text-xs font-semibold text-gray-400 flex items-center ">
            <IoLogoWhatsapp className="text-green-400 text-base" />
            <span>+91 9999049135</span>
          </p>
        </div>
      </div>
      {extrafoot && <FooterHome />}
    </div>
  );
};

export default Footer;
