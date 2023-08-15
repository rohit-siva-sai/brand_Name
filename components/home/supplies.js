import React from "react";
import SupplieBox from "./supplieBox";
import Link from "next/link";
const array = [
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/category/207_AB_Power_Tools_650x579.jpg.transform/384x384/image.jpg",
    title: "Power Tools",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/category/207_AB_Packaging_Supplies_650x579.jpg.transform/384x384/image.jpg",
    title: "Packaging Supplies",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/category/207_AB_Safety_Apparel_650x579.jpg.transform/384x384/image.jpg",
    title: "Safety Apparel",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/category/207_AB_Adhesive_Tapes_650x579.jpg.transform/384x384/image.jpg",
    title: "Adhesive Tapes",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/category/207_AB_TestingDevices_650x579.jpg.transform/384x384/image.jpg",
    title: "Testing Devices",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/category/207_AB_Measuring_Scales_650x579.jpg.transform/384x384/image.jpg",
    title: "Measuring Scales",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/category/207_AB_SemiCondutors_650x579.jpg.transform/384x384/image.jpg",
    title: "Semi Conductors",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/categorypages/mro/final/category/207_AB_HandTools_650x579.jpg.transform/384x384/image.jpg",
    title: "Hand Tools",
    link: "",
  },
];

const Supplies = () => {
  return (
    <div className="pt-12 pb-20 px-4 bg-gray-100">
      <p className="text-3xl pb-8 font-bold text-center text-gray-800">
        Top picks from Industrial & MRO Supplies
      </p>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-4 place-items-center   md:gap-y-20 gap-y-4 md:gap-x-20 md:px-56">
        {array.map((item) => {
          return (
            <Link href={item.link}>
              <picture>
                <img
                  src={item.imgUrl}
                  alt=""
                  className="cursor-pointer h-48 w-48"
                />
              </picture>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Supplies;
