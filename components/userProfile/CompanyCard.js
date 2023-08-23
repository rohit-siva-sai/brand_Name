import React from "react";

const CompanyCard = ({ title, value }) => {
  // console.log(title,Array.isArray(value));
  const array = Array.isArray(value);
  return (
    <div className="grid grid-cols-3  border">
      <div className="py-4 px-3 col-span-1 bg-gray-200/50 text-gray-600  font-semibold">
        {title}
      </div>
      {array ? (
        <div  className="col-span-2 flex flex-wrap   py-4 px-4 font-semibold text-gray-800">
          {value.map((item)=> <p className="pr-2">{item},</p>  )}
        </div>
      ) : (
        <div className="col-span-2 py-4 px-4 font-semibold text-gray-800">
          {value}
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
