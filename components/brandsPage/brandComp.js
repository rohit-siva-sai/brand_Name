import Link from "next/link";
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";

const BrandComp = ({
  companyUrl,
  bannerImage,
  Logo,
  companyName,
  description,
}) => {
  return (
    <div className="border relative shadow-md rounded-md hover:shadow-blue-300 ">
      <Link href={companyUrl} target="_blank">
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
            <p className="text-xs text-gray-400 h-16 hover:h-full overflow-hidden hover:overflow-visible font-semibold">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandComp;
