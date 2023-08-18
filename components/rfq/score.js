import { useStore } from "@/useStore/details";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

import ReactStoreIndicator from "react-score-indicator";

const Score = () => {
  const [progress, productName, scoreProduct, scoreRequire,rfqScore,updateRfqScore] = useStore(
    (store) => [
      store.progress,
      store.productName,
      store.scoreProduct,
      store.scoreRequire,
      store.rfqScore,
      store.updateRfqScore,
    ]
  );
  const [showRequire, setShowRequire] = useState(false);
  // console.log('kjsdkjds',progress,productName);

  return (
    <div className=" h-max py-4 px-4">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-lg">RFQ Score</p>
          <p className="text-gray-700 text-sm">
            Provide as many details as possible about your request to ensure a
            faster response from the right suppliers. The higher the score the
            better responses you will get.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <ReactStoreIndicator value={progress} maxValue={100} />
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col space-y-3">
              {scoreProduct.map((item) => {
                return (
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3 items-center">
                      <FaCheckCircle
                        size={16}
                        className={`${
                          item.score ? "text-emerald-500" : "text-gray-300"
                        }`}
                      />
                      <p className="text-gray-800">{item.label}</p>
                    </div>
                    <p className="text-gray-700">{item.marks}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div
                  className={`flex space-x-2 items-center cursor-pointer `}
                  onClick={() => {
                    setShowRequire(!showRequire);
                  }}
                >
                  <BiChevronDown
                    size={25}
                    className={`transition-transform duration-500 ${
                      showRequire ? "rotate-180" : "rotate-0"
                    }`}
                  />
                  <p className="leading-5">More Customized Requirements</p>
                </div>
                <p>21</p>
              </div>
              {showRequire && (
                <div className=" mt-3 flex transition-all duration-500 flex-col space-y-3">
                  {scoreRequire.map((item) => {
                    return (
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3 items-center">
                          <FaCheckCircle
                            size={16}
                            className={`${
                              item.score ? "text-emerald-500" : "text-gray-300"
                            }`}
                          />
                          <p className="text-gray-800">{item.label}</p>
                        </div>
                        <p className="text-gray-700">{item.marks}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
