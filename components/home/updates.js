import Link from "next/link";
import React from "react";
const array = [
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/29th-may-2023/Purchase_image_1450_664_3.jpg.transform/348x160/image.jpg",
    title: "10 Best Laptops for Office Use - Buying Guide",
    matter:
      "Make the right choice for your business with our comprehensive Laptop buying guide. Learn about the key factors to consider when selecting laptops for your business.",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/29th-may-2023/Purchase_image_1450_664_1.jpg.transform/348x160/image.jpg",
    title: "Best Laptop Bags for Office and Home: Types & Features",
    matter:
      "Looking for the best laptop bags in India? Check out the types of laptop bags, waterproof laptop bags, best laptop bags for men & women, and much more.",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/17th-april-2023/Firstimage_1450_664.jpg.transform/348x160/image.jpg",
    title: "Stay Cool and Stylish with these Must-Have Summer Essentials",
    matter:
      "Don't let the summer heat get you down! Discover our selection of cooling items & summer essentials to stay cool. From sun hats to grills, we've got you covered!   ",
    link: "",
  },
];

const Updates = () => {
  return (
    <div className="px-40">
      <p className="font-semibold pb-10 text-center text-gray-800 text-3xl">
        Product Updates
      </p>
      <div className="grid grid-cols-3 gap-x-12">
        {array.map((item) => {
          return (
            <Link href={""}>
              <div className="flex flex-col space-y-3 pb-10 bg-white hover:scale-105 hover:shadow-[10px_10px_10px_-2px_rgba(0,0,0,0.3)] transition-all duration-300 shadow-black  ">
                <picture>
                  <img src={item.imgUrl} alt="" className="w-full" />
                </picture>
                <p className="font-bold text-lg pl-4 pr-6 text-gray-800">
                  {item.title}
                </p>
                <p className="font-semibold pl-4 text-[15px] pr-6 text-gray-500 ">
                  {item.matter}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <Link href={""}>
        <div className="text-center underline-offset-1 underline decoration-2 text-violet-500 decoration-violet-500 hover:opacity-80 text-xl font-bold pt-10">
          Read More
        </div>
      </Link>
    </div>
  );
};

export default Updates;
