import React from "react";

const DetailCard = ({ Icon, title, value }) => {
  return (
    <div className="flex items-center">
      <div className="flex space-x-2 items-center w-1/4">
        <Icon className=" text-gray-500" size={20} />
        <p className="text-base font-semibold text-gray-600">{title} : </p>
      </div>
      <p className="font-semibold text-gray-700 text-base">{value}</p>
    </div>
  );
};

export default DetailCard;
