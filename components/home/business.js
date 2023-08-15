import React from "react";
import ItemCard from "./itemCard";
const array = [
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/IT_Services.jpg",
    title: "IT & Services",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/Food_Hospitality.jpg",
    title: "Food & Hospitality",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/Education.jpg",
    title: "Education",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/Nonprofit.jpg",
    title: "Nonprofit",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/Enterprise.jpg",
    title: "Enterprise",
    link: "",
  },
  {
    imgUrl:
      "https://static-assets.business.amazon.com/assets/in/8th-nov/SMB.jpg",
    title: "SMB",
    link: "",
  },
];

const Business = () => {
  return (
    <div className="px-40  bg-gray-100">
      <p className="font-semibold pb-10 text-center text-gray-800 text-3xl">
        Business Profiles
      </p>
      <div className="grid grid-cols-4 gap-y-10  gap-x-10">
        {array.map((item) => {
          return <ItemCard imgUrl={item.imgUrl} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Business;
