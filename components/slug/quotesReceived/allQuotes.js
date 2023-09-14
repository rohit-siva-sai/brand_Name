import { Progress } from "antd";
import Link from "next/link";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const AllQuotes = ({ quoteData }) => {
  console.log("quoteData",quoteData);

  return (
    <div className="w-3/5 px-6  bg-white rounded-xl h-[900px] py-4">
      <div>
        <p className="font-bold text-xl  text-gray-800 mb-4">
          Quotes Received (0 of Maximun 20)
        </p>
        <div className="px-2 w-fit  py-1 hover:border-rose-600 border text-gray-600 hover:text-rose-600 rounded cursor-pointer">
          Compare Quotations
        </div>
      </div>
      <div className="flex flex-col my-6 divide-y">
        {quoteData?.length == 0  && <p>no quotes</p> }
        {quoteData?.map((item, index) => {
          return (
            <Link  href={``}>
              <div className="grid-cols-7 py-5  place-items-center hover:bg-gray-50  grid  ">
                <div className="flex flex-col items-center col-span-1  space-y-3 ">
                  <picture>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIn-gE6j6sjvg0ekFgFBIzVP5VdN3aBu9dLg&usqp=CAU"
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                  </picture>
                  <p className="font-semibold text-gray-700">
                    Seller {index + 1}
                  </p>
                </div>

                <div className="col-span-2 flex flex-col items-center divide-y text-gray-400 font-semibold">
                  <p className="font-semibold text-gray-700  pb-4 text-xl">
                    Quote Time
                  </p>
                  <p className="font-semibold text-gray-600 pt-4">2023/08/24</p>
                </div>
                <div className="col-span-2 flex flex-col items-center  divide-y text-gray-400 font-semibold">
                  <p className="font-semibold text-gray-700 pb-4 text-xl">
                    Quote Time
                  </p>
                  <p className="font-semibold text-gray-600 pt-4">2023/08/24</p>
                </div>
                <div className="col-span-2 flex flex-col space-y-6 items-center text-gray-400 font-semibold">
                  <p className="font-bold text-gray-800 text-lg">
                    Quotation Score
                  </p>
                  <p
                    className={`font-semibold text-white px-4 py-1 rounded-3xl  ${
                      item.quotationScore > 50 ? "bg-green-500" : "bg-rose-500"
                    } `}
                  >
                    {item.quotationScore}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllQuotes;
