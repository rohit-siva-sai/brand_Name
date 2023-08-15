import React from "react";

const Benifits = () => {
  return (
    <div className="pt-12 pb-16 px-36">
      <p className="text-3xl pb-12 w-3/4 mx-auto font-semibold text-center text-gray-800">
        Customers enjoy a large number of benefits when they shop on Amazon
        Business
      </p>
     <div className=" flex flex-col space-y-20">
     <div className="grid grid-cols-3 gap-x-6">
        <div className="flex flex-col items-center space-y-3 border-t-4 border-y-purple-300 pt-4">
          <p className="font-bold text-gray-800 text-xl">Wide selection</p>
          <p className="text-gray-500 font-semibold text-center px-4">
            Access a wide selection of Industrial & MRO supplies from top
            brands. See top-selling products, meet your compliance requirement
            and get GST invoice on enabled products when you buy from
            India&#39;s largest B2B marketplace.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 border-t-4 border-y-purple-300 pt-4">
          <p className="font-bold text-gray-800 text-xl">Reduce costs</p>
          <p className="text-gray-500 font-semibold text-center px-4">
            Tap into business exclusive deals and quantity discounts for all
            your bulk orders and save on your purchasing cost.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 border-t-4 border-y-purple-300 pt-4">
          <p className="font-bold text-gray-800 text-xl">Get multiple quotes</p>
          <p className="text-gray-500 font-semibold text-center px-4">
            Compare across lakhs of wholesale B2B suppliers who compete for your
            business to choose the lowest prices. Buy at wholesale prices and
            save costs while buying from India's largest B2B marketplace.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-40">
        <div className="flex flex-col items-center space-y-3 border-t-4 border-y-purple-300 pt-4">
          <p className="font-bold text-gray-800 text-xl">
            Explore top-rated products
          </p>
          <p className="text-gray-500 font-semibold px-6 text-center">
            Explore wholesale B2B products that other B2B customers and
            businesses like you have rated highly.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 border-t-4 border-y-purple-300 pt-4">
          <p className="font-bold text-gray-800 text-xl">Get Prime benefits</p>
          <p className="text-gray-500 font-semibold px-6 text-center">
            Get what you want at the right time with our B2B services that
            consist of a variety of bulk shipping options including 1-2 day
            shipping with Prime.
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Benifits;
