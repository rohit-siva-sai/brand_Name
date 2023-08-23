import { Progress } from "antd";
import Link from "next/link";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const AllRfqs = ({ rfqData }) => {
  return (
    <div className="bg-gray-100 flex-1 px-6 h-[640px] pb-8  overflow-y-scroll  ">
      <p className="font-light text-sm py-4">
        RFQs / <span className="font-normal">All</span>
      </p>
      <div className="bg-white w-full   py-6   rounded-xl">
        <div className="border-b flex flex-col space-y-3 pb-4">
          <p className="font-semibold text-2xl px-8 text-gray-800">
            My Request
          </p>
          <div className="flex space-x-8 ml-4 px-8">
            <div
              className={`font-semibold text-gray-600 text-[17px] hover:text-rose-600 cursor-pointer`}
            >
              All
            </div>
            <div
              className={`font-semibold text-gray-600 text-[17px] hover:text-rose-600 cursor-pointer`}
            >
              Unread
            </div>
          </div>
        </div>
        <div className="flex space-x-4 py-4 px-8 ">
          <div className="px-2 py-1 hover:border-rose-600 border text-gray-600 hover:text-rose-600 rounded cursor-pointer">
            Mark as read
          </div>
          <div className="px-2 py-1 hover:border-rose-600 border text-gray-600 hover:text-rose-600 rounded cursor-pointer">
            Mark as Unread
          </div>
          <div className="px-2 py-1 hover:border-rose-600 border text-gray-600 hover:text-rose-600 rounded cursor-pointer">
            Starred
          </div>
        </div>
        <div className="grid-cols-12 grid place-items-start px-8 pb-4 ">
          <div className="col-span-1">
            <input type="checkbox" name="" id="" />
          </div>
          <div className="font-semibold text-gray-600 col-span-5 ">
            Quotation
          </div>
          <div className="font-semibold text-gray-600 col-span-2 ">Expires</div>
          <div className="font-semibold text-gray-600 col-span-2 ">
            PostDate
          </div>
          <div className="font-semibold text-gray-600 col-span-2 ">State</div>
        </div>
        <div className="flex flex-col space-y-0">
          {rfqData.map((item) => {
            return (
              <Link passHref={true} href={`/myRfq/rfqList/${item.id}`}>
                <div className="grid-cols-12 py-3 border px-8 hover:bg-gray-50  grid place-items-start ">
                  <div className="col-span-1 flex space-x-4 items-center">
                    <input type="checkbox" name="" id="" />
                    <AiOutlineStar className="text-gray-500 " size={20} />
                  </div>
                  <div className=" flex items-center col-span-5 space-x-4 flex-1 ">
                    <div className="w-16 rounded h-16 bg-gray-100 flex items-center justify-center ">
                      <p className="font-semibold text-center text-gray-400  text-xs">
                        no image provided
                      </p>
                    </div>
                    <div className="flex flex-col space-y-4 items-stretch ">
                      <p className="font-semibold text-gray-400 text-base">
                        {item.productName}
                      </p>
                      <p className="font-semibold text-gray-400 text-base">
                        {item.productCategory[2]}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 text-gray-400 font-semibold">
                    {item.validDate}654654
                  </div>
                  <div className="col-span-2 text-gray-400 font-semibold">
                    {item.validDate}654654
                  </div>
                  <div className="col-span-2 text-gray-400 font-semibold">
                    <div className="flex flex-col space-y-1">
                      <p>Quotes Recieved</p>
                      <div className="flex space-x-2 items-center">
                        <div className="flex-1 opacity-50">
                          <Progress
                            percent={50}
                            className="flex-1"
                            showInfo={false}
                            size={"small"}
                          />
                        </div>
                        <p className="text-xs">0/20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllRfqs;
