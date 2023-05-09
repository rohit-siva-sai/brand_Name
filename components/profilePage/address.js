import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Address = ({ heading }) => {
  const [toggleAddress, setToggleAddress] = useState(false);
  return (
    <div className="pt-4">
      <div
        className={`w-full my-auto border rounded-xl bg-white shadow-md px-8 transition-all duration-500  ${
          toggleAddress ? "  h-[330px] mb-16" : "h-[50px] overflow-hidden"
        } `}
      >
        <div
          className={`flex justify-between items-center ${
            toggleAddress ? "border-b" : "border-none"
          }  py-1 `}
        >
          <p className="font-semibold text-gray-700">{heading}</p>
          <div
            onClick={() => {
              setToggleAddress(!toggleAddress);
            }}
            className="flex items-center space-x-2 py-2 cursor-pointer hover:bg-blue-100 rounded-md px-4"
          >
            {!toggleAddress ? (
              <>
                <AiOutlinePlus className="text-blue-500 text-lg" />
                <p className="uppercase text-blue-500 font-bold ">
                  {" "}
                  add new {heading}
                </p>
              </>
            ) : (
              <>
                <RxCross2 className="text-blue-500 text-lg" />
                <p className="uppercase text-blue-500 font-bold ">Close</p>
              </>
            )}
            {/* <RxCross2/> */}
          </div>
        </div>
        <div className="py-4 flex flex-col space-y-4">
          <div>
            <input
              type="text"
              name="address"
              id=""
              placeholder="Enter Address * "
              className="border-2 focus:border-blue-500 rounded-md outline-none w-full py-2 px-4"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="number"
              name="pincode"
              id=""
              placeholder="Enter Pincode * "
              className="border-2 focus:border-blue-500 rounded-md outline-none w-1/2 py-2 px-4"
            />
            <div>
              <p className="text-gray-600 font-semibold ">City</p>
              <p className="text-gray-400 font-medium ">city</p>
            </div>
          </div>
          <div className="grid grid-cols-2 px-4 gap-x-8">
            <div>
              <p className="text-gray-600 font-semibold ">State</p>
              <p className="text-gray-400 font-medium ">State</p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold ">Country</p>
              <p className="text-gray-400 font-medium ">Country</p>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto px-8 items-center border rounded-md hover:bg-gray-100 cursor-pointer border-blue-500 space-x-3  flex  py-2">
          <AiOutlinePlus className="text-lg text-gray-500" />
          <p className="text-gray-500 font-semibold text-base">Add Address</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
