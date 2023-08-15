import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden  ">
        <picture>
          <img
            src="https://static-assets.business.amazon.com/assets/in/herobanners/allhero/v2/196_MRO.jpg.transform/2048x682/image.jpg"
            alt=""
          />
        </picture>
        <div className="absolute top-0 left-0 py-20 space-y-20 border w-1/2 flex flex-col md:px-32 justify-center  ">
          <p className="font-semibold text-4xl text-gray-800">
            Discover a vast selection of Industrial, Maintenance, Repair,
            Hardware and Safety Supplies
          </p>
          <div className="flex-col flex space-y-5">
            <p className="font-semibold text-lg text-gray-700">
              Save time and cost buying industrial supplies and safety equipment
              from Amazon Business. We offer lakhs of maintenance, repair and
              operations products all in one place.{" "}
            </p>
            <Link href={""}>
              <div className="bg-yellow-400 text-lg px-4 w-fit py-2 font-semibold text-gray-800 hover:opacity-90 cursor-pointer rounded-sm">
                Explore now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
