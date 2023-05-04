import React from "react";
import Quote from "./quote";

const array = [
  {
    imgUrl: "https://d5nfy7n2jvqm2.cloudfront.net/new-buyer-imgs/buyer-1.svg",
    title: "Lowest Rates",
  },
  {
    imgUrl: "https://d5nfy7n2jvqm2.cloudfront.net/new-buyer-imgs/buyer-2.svg",
    title: "Assured Quality",
  },
  {
    imgUrl: "https://d5nfy7n2jvqm2.cloudfront.net/new-buyer-imgs/buyer-3.svg",
    title: "On-Time Delivery",
  },
  {
    imgUrl: "https://d5nfy7n2jvqm2.cloudfront.net/new-buyer-imgs/buyer-4.svg",
    title: "Buy on Credit",
  },
];

const BestQuotes = () => {
  return (
    <div className="pt-3 px-4" >
      <div className="text-center" >
        <p className="text-4xl py-6 font-semibold text-teal-500" >Get Best Quotes</p>
        <p className="font-semibold text-lg pb-8 text-gray-700 md:w-1/2 mx-auto" >
          Choose from a wide range of Raw Materials Categorya and Get the Right
          Material in the sized, finish and quantity you need - when you need
          it.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-2 md:gap-y-0 gap-y-4 md:gap-x-5 md:px-56">
            {array.map((item)=>{
                return (
                    <Quote imgUrl={item.imgUrl} title={item.title} />
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default BestQuotes;
