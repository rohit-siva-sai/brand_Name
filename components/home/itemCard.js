import Link from "next/link";
import React from "react";

const ItemCard = ({imgUrl,title}) => {
  return (
    <Link href={""}>
      <div className="border-2 hover:scale-105 hover:shadow-[10px_10px_10px_-2px_rgba(0,0,0,0.3)] transition-all duration-300 shadow-black  border-gray-400/70 flex flex-col space-y-3 items-center py-8 ">
        <picture>
          <img
            src={imgUrl}
            alt=""
          />
        </picture>
        <p className="font-bold text-lg text-gray-700">{title}</p>
      </div>
    </Link>
  );
};

export default ItemCard;
