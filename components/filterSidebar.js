import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import Checkbox from "./checkbox";

const FilterSidebar = ({
  products,
  filterCategory,
  filterMaterial,
  filterType,
}) => {
  // console.log(products, "filtersidebar");
  const [dropDown1, setDropDown1] = useState(true);
  const [dropDown2, setDropDown2] = useState(true);
  const [dropDown3, setDropDown3] = useState(true);
  const [category, setCategory] = useState("metal");
  const [material,setMaterial] = useState("material")
  const [type,setType] = useState("type")

  const handleCategory = (value) => {
    setCategory(value);
    console.log("dfdfdf", value);
  };

  return (
    <div className="w-1/5 h-full md:block hidden shadow-md rounded-xl  sticky my-8 top-20 z-50 ">
      <div>
        <div className="flex flex-col  px-2  overflow-y-hidden overflow-x-hidden ">
          <div
            onClick={() => {
              setDropDown1(!dropDown1);
            }}
            className={`cursor-pointer flex items-center bg-white z-30 justify-between  `}
          >
            <p className="text-gray-600 font-bold">Category</p>
            <MdKeyboardArrowUp
              className={`${
                !dropDown1
                  ? "-rotate-180 text-gray-500 "
                  : "rotate-0 text-blue-500 "
              } duration-500 transition   text-2xl `}
            />
          </div>
          <div
            className={` transition flex flex-col   ${
              dropDown1 ? "translate-y-0  " : "-translate-y-[250%] h-0 "
            } duration-500 ease-in-out py-4 `}
          >
            <div className={`  flex flex-col  space-y-3 `}>
              <Checkbox
                heading={"Metals"}
                value="metal"
                filters={filterCategory}
                handle={handleCategory}
                category={"category"}
              />

              <Checkbox
                heading={"Plastic"}
                value="plastic"
                filters={filterCategory}
                handle={handleCategory}
                category={"category"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  px-2  overflow-y-hidden overflow-x-hidden ">
          <div
            onClick={() => {
              setDropDown2(!dropDown2);
            }}
            className={`cursor-pointer flex items-center bg-white z-30 justify-between  `}
          >
            <p className="text-gray-600 font-bold">Material</p>
            <MdKeyboardArrowUp
              className={`${
                !dropDown2
                  ? "-rotate-180 text-gray-500 "
                  : "rotate-0 text-blue-500 "
              } duration-500 transition   text-2xl `}
            />
          </div>
          <div
            className={` transition flex flex-col   ${
              dropDown2 ? "translate-y-0  " : "-translate-y-[350%] h-0 "
            } duration-500 ease-in-out py-4 `}
          >
            <div className={`  flex flex-col  space-y-3 `}>
              <Checkbox
                heading={category == "metal" ? "Mild Steel" : "Nylon"}
                value={category == "metal" ? "mild_steel" : "nylon"}
                filters={filterMaterial}
                material={material}
              />

              <Checkbox
                heading={category == "metal" ? "Stainless Steel" : "ABS"}
                value={category == "metal" ? "stainless_steel" : "abs"}
                filters={filterMaterial}
                material={material}
              />
              <Checkbox
                heading={category == "metal" ? "Aluminium" : "PVA"}
                value={category == "metal" ? "aluminium" : "pva"}
                filters={filterMaterial}
                material={material}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  px-2  overflow-y-hidden overflow-x-hidden ">
          <div
            onClick={() => {
              setDropDown3(!dropDown3);
            }}
            className={`cursor-pointer flex items-center bg-white z-30 justify-between  `}
          >
            <p className="text-gray-600 font-bold">Type</p>
            <MdKeyboardArrowUp
              className={`${
                !dropDown3
                  ? "-rotate-180 text-gray-500 "
                  : "rotate-0 text-blue-500 "
              } duration-500 transition   text-2xl `}
            />
          </div>
          <div
            className={` transition flex flex-col   ${
              dropDown3 ? "translate-y-0  " : "-translate-y-[350%] h-0 "
            } duration-500 ease-in-out py-4 `}
          >
            <div className={`  flex flex-col  space-y-3 `}>
              <Checkbox
                heading={category == "metal" ? "Long Products" : "Round"}
                value={category == "metal" ? "long_products" : "round"}
                filters={filterType}
                type={type}
              />

              <Checkbox
               heading={category == "metal" ? "Flat Products" : "Long"}
               value={category == "metal" ? "flat_products" : "long"}
                
                filters={filterType}
                type={type}
              />
              {category=="metal" && <Checkbox
                heading={"Semi Furnished"}
                value="semi_furnished"
                filters={filterType}
                type={type}
              />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
