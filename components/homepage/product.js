import React from "react";

const Product = ({bgImage,title}) => {
  return (
    <div className="  " >
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="group relative rounded-lg md:bg-contain border bg-none md:h-44 h-36  flex items-center justify-center  w-fusll bg-center bg-no-repeat "
      >
      <p className="text-lg bg-gray-800/40 w-full h-full flex justify-center items-center text-white font-bold" >{title}</p>
      </div>
    </div>
  );
};

export default Product;
