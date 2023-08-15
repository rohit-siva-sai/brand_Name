import Link from "next/link";
import React from "react";
const array = [
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/shop-by-brand/MRO_brands_01.jpg.transform/384x384/image.jpg",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/shop-by-brand/MRO_brands_02.jpg.transform/384x384/image.jpg",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/shop-by-brand/MRO_brands_03.jpg.transform/384x384/image.jpg",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/shop-by-brand/MRO_brands_04.jpg.transform/384x384/image.jpg",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/shop-by-brand/MRO_brands_05.jpg.transform/384x384/image.jpg",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/shop-by-brand/MRO_brands_06.jpg.transform/384x384/image.jpg",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/shop-by-brand/MRO_brands_09.jpg.transform/384x384/image.jpg",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/shop-by-brand/MRO_brands_11.jpg.transform/384x384/image.jpg",
    link: "",
  },
];

const Brands = () => {
  return (
    <div>
      <div className="pt-12 pb-20 px-4 ">
        <p className="text-3xl pb-8 font-bold text-center text-gray-800">
          Top Industrial & MRO Supplies Brands
        </p>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-x-4 place-content-center   md:gap-y-20 gap-y-4 md:gap-x-20 md:px-56">
          {array.map((item) => {
            return (
              <Link href={item.link}>
                <picture>
                  <img src={item.imgUrl} alt="" className="cursor-pointer " />
                </picture>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center bg-gray-100 py-12">
        <div className="flex flex-col  space-y-6 items-center">
            <p className="font-bold text-gray-800 text-xl">Existing Amazon Business customer?</p>
            <Link href={""}>
              <div className="bg-yellow-400 text-lg px-8 w-fit py-2 font-semibold text-gray-800 hover:opacity-90 cursor-pointer rounded-sm">
                Sign-in Now
              </div>
            </Link>
        </div>
        <div className="flex flex-col  space-y-6 items-center">
            <p className="font-bold text-gray-800 text-xl">Not an Amazon Business customer?</p>
            <Link href={""}>
              <div className="bg-yellow-400 text-lg px-8 w-fit py-2 font-semibold text-gray-800 hover:opacity-90 cursor-pointer rounded-sm">
                Register Now
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Brands;
