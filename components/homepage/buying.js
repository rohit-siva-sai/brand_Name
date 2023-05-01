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
      <div className="flex flex-col items-center pt-16 space-y-8 " >
        <p className="text-teal-500 text-5xl font-semibold w-1/2 mx-auto text-center px-12  leading-[60px] " >Why Buying From ofbisuness is benificial?</p>
        <div className="flex items-center md:px-8 rounded-md py-2  px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2">
          <p className="text-white font-semibold md:block hidden  ">
            Schedule a Call back
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-x-8 gap-y-6">
          {array.map((item) => {
            return (
              <div
                className={`flex space-x-3 ${item.bg} pl-6 pr-16 py-3 rounded-md items-center justify-start`}
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
