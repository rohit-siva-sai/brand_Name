import Link from "next/link";
import React from "react";

const RfqSteps = () => {
  return (
    <div className="my-5">
      <div className="flex space-x-3  items-center">
        <div className="flex space-x-3 rounded-lg  bg-slate-100 px-4 py-2">
          <div className="flex space-x-2  items-center">
            <p className="font-bold text-gray-700 w-7 flex items-center justify-center h-5 border rounded-full  text-lg border-black">
              1
            </p>
            <p className="leading-5 text-slate-800">
              Submit a RFQ in just 1 minute.
            </p>
          </div>
          <div className="flex space-x-2  items-center">
            <p className="font-bold text-gray-700 w-7 flex items-center justify-center h-5 border rounded-full  text-lg border-black">
              2
            </p>
            <p className="leading-5 text-slate-800">
              Get multiple quotations from verified suppliers.
            </p>
          </div>
          <div className="flex space-x-2  items-center">
            <p className="font-bold text-gray-700 w-7 flex items-center justify-center h-5 border rounded-full  text-lg border-black">
              3
            </p>
            <p className="leading-5 text-slate-800">
              Compare and choose the best quotation!
            </p>
          </div>
        </div>
        <Link
          href={""}
          className="w-36 font-semibold text-blue-600 hover:opacity-70 "
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default RfqSteps;
