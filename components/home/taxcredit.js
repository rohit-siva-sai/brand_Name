import React from "react";

const Taxcredit = () => {
  return (
    <div>
      <div className="bg-[#232f3e] flex flex-col py-20 justify-center items-center space-y-12 ">
        <p className="text-white text-6xl font-bold ">28%</p>
        <div className="h-1 w-48 bg-purple-400 "></div>
        <p className="text-white text-2xl font-bold w-3/5 text-center">
          Customers saved up to 28% through tax credit on GST invoice and
          bulk-purchase discounts on industrial, hardware, maintenance, repair
          and operations supplies when they switched to Amazon Business.
        </p>
      </div>
      <div className="bg-purple-100 flex flex-col py-10 justify-center items-center space-y-0 ">
        <p className="font-bold text-3xl text-gray-700 ">
          Here is how we meet your MRO supply needs
        </p>
        <p className="font-medium text-gray-600 w-3/4 text-center">
          Shop for a wide range of MRO products, hardware items and industrial
          safety equipment across categories such as lab & scientific supplies,
          power tools, safety apparel, tapes, adhesives, sealants and much more
          from top brands like Bosch, 3M, Dewalt, Black & Decker and more.
        </p>
      </div>
    </div>
  );
};

export default Taxcredit;
