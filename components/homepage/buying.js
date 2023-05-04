import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const array = [
  { title: "Lowest Quotations for all Raw Materials", bg: "bg-teal-100/60" },
  {
    title: "Credit fFacilities Available fot Purchases",
    bg: "bg-purple-100/60",
  },
  { title: "Widest Range of Raw Materials", bg: "bg-orange-100/50" },
  { title: "Stringent Quality Assurance of Deliveries", bg: "bg-blue-100/50" },
  { title: "In-App Teacking of Orders", bg: "bg-rose-100/60" },
  { title: "Logistics Support for Deliveries", bg: "bg-yellow-100/40" },
];

const Buying = () => {
  return (
    <div>
      <div className="flex flex-col items-center pt-16 space-y-6 md:pace-y-8 " >
        <p className="text-teal-500 md:text-5xl text-2xl font-semibold md:w-1/2 mx-auto text-center px-12  md:leading-[60px] " >Why Buying From ofbisuness is benificial?</p>
        <div className="flex items-center md:px-8 rounded-md py-2  px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2">
          <p className="text-white font-semibold   ">
            Schedule a Call back
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-y-4 md:gap-x-8 md:gap-y-6">
          {array.map((item) => {
            return (
              <div
                className={`flex space-x-3 ${item.bg} md:px-0 px-4 md:pl-6 md:pr-16 py-3 rounded-md items-center justify-start`}
              >
                <BsPatchCheckFill className="text-2xl text-teal-500" />
                <p className="text-base font-medium text-gray-700">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Buying;
