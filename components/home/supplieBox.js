import React from "react";

const SupplieBox = ({imgUrl,title}) => {
  return (
    <div className="border space-y-2 flex flex-col items-center py-3 px-3 rounded-lg shadow-md ">
      <div className="flex flex-col justify-center items-center bg-blue-100  w-full border md:h-36 h-28 rounded-lg">
        <picture className="">
          <img src={imgUrl} alt="" className="w-full md:h-20 h-16 " />
        </picture>
        <p className="font-semibold text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default SupplieBox;
