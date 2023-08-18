import Link from "next/link";
import React, { useMemo, useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import EmailSender from "./emailSender";

const BrandComp = ({
  companyUrl,
  bannerImage,
  Logo,
  companyName,
  description,
  companyEmail,
  handleEnquiry,
}) => {
  const [showFull, setShowFull] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  // console.log(companyEmail);

  const handleSet = () => {
    setShowEnquiry(!showEnquiry)
    handleEnquiry(companyName,showEnquiry, companyEmail);
  };

  return (
    <div
      className={`border relative shadow-md transition-all duration-300 ${
        showFull ? "h-full   overflow-visible " : "h-56 overflow-hidden "
      }  rounded-md hover:shadow-blue-300 `}
    >
      <Link href={""} target="_blank">
        <div>
          <picture>
            <img
              src={bannerImage}
              alt=""
              className="h-20 w-full rounded-t-md "
            />
          </picture>

          <div className="flex flex-col -mt-8 space-y-2 px-4 pb-4">
            <div className="flex justify-between items-end">
              <picture>
                <img
                  src={Logo}
                  alt=""
                  className="w-12 h-12 border rounded-xl bg-white "
                />
              </picture>
              <FcLikePlaceholder className="text-lg " />
            </div>

            <p className="text-gray-700 font-bold">{companyName}</p>
            <p className="text-[10px] leading-3 font-semibold text-gray-400 ">
              <span className="font-bold">Application</span>: Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Animi magnam perferendis
              quaerat{" "}
            </p>
            <p className="text-[10px] leading-3 font-semibold text-gray-400 ">
              <span className="font-bold">Product Families</span>: Lorem ipsum
              dolor sit amet consectetur adipisicing elit
            </p>
            <p className="text-[10px] leading-3 font-semibold text-gray-400 ">
              <span className="font-bold">Chemical Family</span>: Lorem ipsum
              dolor sit amet consectetur adipisicing elit
            </p>
            <p className="text-[11px] text-gray-400 pb-8 font-semibold">
              {description}
            </p>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-0 w-full py-1 px-1 flex justify-between shadow-md border items-center bg-white ">
        {!showFull && (
          <div
            onClick={() => {
              setShowFull(!showFull);
            }}
            className="rounded-full hover:bg-gray-100 cursor-pointer z-10"
          >
            <MdKeyboardArrowDown className="text-2xl text-gray-500" />
          </div>
        )}
        {showFull && (
          <div
            onClick={() => {
              setShowFull(!showFull);
            }}
            className="rounded-full hover:bg-gray-100 cursor-pointer z-10"
          >
            <MdKeyboardArrowUp className="text-2xl text-gray-500" />
          </div>
        )}
        <div className="bg-teal-500 text-[10px] px-2 cursor-pointer py-1 rounded-md h-fit font-semibold text-white">
          view Catalog
        </div>
        <div
          // onClick={() => {
          //   setShowEnquiry(!showEnquiry);
          // }}
          onClick={handleSet}
          className="shadow-md hover:border-red-400 z-40 cursor-pointer px-2 border text-[10px] font-semibold rounded py-1"
        >
          Request Information
        </div>
      </div>
      {/* <EmailSender
        companyName={companyName}
        showEnquiry={showEnquiry}
        companyEmail={companyEmail}
      /> */}
    </div>
  );
};

export default BrandComp;
