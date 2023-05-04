import React from "react";
import Model from "./Model";
import Link from "next/link";
import { AiOutlineFileDone } from "react-icons/ai";
import { IoMan } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

const MobileApp = () => {
  return (
    <div >
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-0 mt-16 px-4 md:px-0 md:h-[630px]  mb-6  align-middle ">
        {/* <Model/> */}
        <div className="flex md:justify-end md:ml-0  ml-8 w-full  relative  md:h-full h-[400px] justify-normal  items-center">
          <div
            className="md:h-5/6 h-full md:w-2/6 w-3/5 border-8 relative shadow-[0px_0px_2px_1px] shadow-gray-700 rounded-[40px] md:rounded-[50px] bg-cover bg-no-repeat border-gray-800"
            style={{
              backgroundImage: `url(https://i.pinimg.com/236x/5b/30/0f/5b300f2b8c27857f9d5325cf278906e6.jpg)`,
            }}
          >
            <div className="w-1/2 h-6 mx-auto rounded-2xl flex justify-start   items-center mt-1 bg-black">
              <div className="rounded-full  w-full h-full bg-no-repeat bg-cover bg-center "  style={{
              backgroundImage: `url(https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif)`,
            }} >
              
              </div>
            </div>
            <div className="w-2 h-20 bg-gray-800 absolute top-16 -left-3 rounded-l-3xl"></div>
            <div className="w-2 h-10 bg-gray-800 absolute top-44 -left-3 rounded-l-3xl"></div>
            <div className="w-2 h-16 bg-gray-800 absolute top-28 -right-3 rounded-r-3xl"></div>
            <div className="w-24 mx-auto h-1 bg-gray-600  absolute bottom-1 left-[50%] -translate-x-[50%]  rounded-3xl"></div>
          </div>
          <div
            className="md:h-5/6 h-full md:w-2/6 w-3/5 border-8 relative top-16 -left-16 shadow-[0px_0px_2px_1px] shadow-gray-700 rounded-[40px]  md:rounded-[50px] bg-cover bg-no-repeat border-gray-800"
            style={{
              backgroundImage: `url(https://i.pinimg.com/736x/29/df/1b/29df1bac4893a448fff00094dbcd6d7f--wallpaper-backgrounds-barcelona.jpg)`,
            }}
          >
            <div className="w-1/2 h-6 mx-auto rounded-2xl flex justify-start   items-center mt-1 bg-black">
              <div className="rounded-full  w-full h-full bg-no-repeat bg-cover bg-center "  style={{
              backgroundImage: `url(https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif)`,
            }} >
              
              </div>
            </div>
            <div className="w-2 h-20 bg-gray-800 absolute top-16 -left-3 rounded-l-3xl"></div>
            <div className="w-2 h-10 bg-gray-800 absolute top-44 -left-3 rounded-l-3xl"></div>
            <div className="w-2 h-16 bg-gray-800 absolute top-28 -right-3 rounded-r-3xl"></div>
            <div className="w-24 mx-auto h-1 bg-gray-600  absolute bottom-1 left-[50%] -translate-x-[50%]  rounded-3xl"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:pl-8  pl-0 md:px-0 md:mt-0 mt-24 space-y-6 ">
          <p className="font-bold text-3xl md:text-4xl md:w-3/5 ">
            Builder Oriented Services & Accurate Services
          </p>
          <p className="font-semibold text-base md:w-1/2 text-gray-500">
            Stop running around for materials, and multiple job sites instead
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4  ">
              <AiOutlineFileDone className="text-2xl " />
              <p className="font-bold text-sm md:text-base text-gray-700">
                Order and track materials for multiple jobsites
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <IoMan className="text-2xl " />
              <p className="font-bold text-sm md:text-base text-gray-700">
                Request walk-in-delivery & specify drop-off instructions
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaTrashAlt className="text-xl " />
              <p className="font-bold text-sm md:text-base text-gray-700">
                Get free refreshments for your team
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href={""} className="border ">
              <picture>
                <img
                  src="https://d5nfy7n2jvqm2.cloudfront.net/new-buyer-imgs/Appstore.png"
                  alt=""
                  className="w-40"
                />
              </picture>
            </Link>
            <Link href={""}>
              <picture>
                <img
                  src="https://d5nfy7n2jvqm2.cloudfront.net/new-buyer-imgs/Playstore.png"
                  alt=""
                  className="w-40"
                />
              </picture>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
