import Image from "next/image";
import React from "react";

const Display = ({ title, imgUrl }) => {
  return (
    <div className="border shadow-md rounded-2xl ">
      <div className="flex flex-col items-center p-4 space-y-3 ">
        <picture className=" cursor-pointer transition-all   duration-500 hover:translate-y-2 ease-in-out hover:scale-y-125 scroll-smooth ">
          <img
            src={`${imgUrl ? imgUrl : "/404Image.jpg"}`}
            alt=""
            className="w-40 rounded-lg bg-gray-100  h-16"
          />
        </picture>
        <p className="font-semibold first-letter:uppercase text-gray-700">
          {title}
        </p>
        <div className="px-2 py-1 border-2 rounded-md w-full font-semibold text-center border-blue-500 cursor-pointer text-blue-500 hover:bg-blue-100/50">
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default Display;
