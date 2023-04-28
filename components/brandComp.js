import Link from "next/link";
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";

const BrandComp = ({
  companyUrl = "https://trojanstore.vercel.app/",
  bannerImg,
  logo,
  compantName,
  description,
}) => {
  return (
    <div className="border relative shadow-md rounded-md ">
      <Link href={companyUrl} target="_blank" >
        <div>
          <picture>
            <img
              src="https://dupont.scene7.com/is/image/Dupont/gettyImages-1004817328-oil_gas_KH "
              alt=""
              className="h-20 w-full rounded-t-md "
            />
          </picture>
          <div className="flex flex-col -mt-8 space-y-2 px-4 pb-4">
            <div className="flex justify-between items-end">
              <picture>
                <img
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg"
                  alt=""
                  className="w-12 h-12 border rounded-xl"
                />
              </picture>
              <FcLikePlaceholder className="text-lg" />
            </div>
            <p className="text-gray-700 font-bold">Company Name</p>
            <p className="text-xs text-gray-400 font-semibold">
              This is the description of the company
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandComp;
