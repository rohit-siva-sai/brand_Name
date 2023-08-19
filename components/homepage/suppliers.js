import React from "react";
import Product from "./product";
import Link from "next/link";

const array = [
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864416074433568366/1662453905583/mild-steel-ms-0.png",
    title: "Mild Steel",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864574686732752671/1662372128988/stainless-steel-ss-0.png",
    title: "Stainless Steel",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864007987755227990/1662382192334/non-ferrous-non-ferrous-0.png",
    title: "Non Ferrous",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864218128626751051/1661914897754/polymers-polymers-0.png",
    title: "Polymers",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864216983510456782/1663229097795/chemicals-chemicals-0.png",
    title: "Chemicals",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/865832350670393641/1663237406214/pipes-pipes-0.png",
    title: "Pipes",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864452691307272957/1661920750742/petroleum-image-0.png",
    title: "Petroleum",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/943234501910207890/1680698031837/agrochemicals-agrochemicals-0.png",
    title: "Agrochemicals",
  },
];

const Suppliers = () => {
  return (
    <div className="">
      <div className="md:px-36 px-4 flex flex-col md:py-8 py-2 ">
        <div className="py-8">
          <p className="md:text-lg text-base font-bold text-purple-500">
            The easiest way to source metals and polymers
          </p>
          <p className="text-black text-xl font-bold">
            Search, sample, quote and purchase from 8,000+ suppliers-all in one
            place.
          </p>
          <p className="text-sm text-gray-400 font-semibold">
            Raw Materials at Lowest Prices - Guaranteed
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2  md:gap-x-4 gap-x-2 gap-y-2  md:gap-y-3">
          {array.map((item) => {
            return <Product bgImage={item.bgImage} title={item.title} />;
          })}
        </div>
        <div className="flex justify-center space-x-3 pt-6">
          <Link href={"/rfq"}>
            <div className="flex items-center md:px-8 rounded-md py-2  px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2">
              <p className="text-white font-semibold   ">Get RFQ</p>
            </div>
          </Link>
          <Link href={"/loanType"}>
            <div className="flex items-center md:px-8 rounded-md py-2  px-2 cursor-pointer hover:bg-green-500 bg-green-600  space-x-2">
              <p className="text-white font-semibold  ">Get Loan</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
