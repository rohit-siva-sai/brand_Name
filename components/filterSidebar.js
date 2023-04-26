import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const FilterSidebar = ({ products, filterCategory }) => {
  // console.log(products, "filtersidebar");
  const [dropDown, setDropDown] = useState(true);
  const [category, setCategory] = useState("metal");
 


  return (
    <div className="w-1/5 h-96 md:block hidden  sticky py-8 top-20 z-50 border  border-green-500">
      <div>
        <div className="flex flex-col border px-2  overflow-y-hidden overflow-x-hidden ">
          <div
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className="cursor-pointer flex items-center bg-white z-30 justify-between  "
          >
            <p className="text-gray-400 font-bold">Category</p>
            <MdKeyboardArrowUp
              className={`${
                !dropDown
                  ? "-rotate-180 text-gray-500 "
                  : "rotate-0 text-blue-500 "
              } duration-500 transition  text-2xl `}
            />
          </div>
          <div
            className={` transition flex flex-col  ${
              dropDown ? "translate-y-0  " : "-translate-y-[200%] "
            } duration-500 ease-in-out `}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rohit"
                value="metal"
                // checked={!check}
                onChange={(e) => {
                  filterCategory(e.target.value, e.target.checked);
                }}
              />
              <label htmlFor="">Metals</label>
            </div>
            <div className="flex items-baseline">
              <input
                type="checkbox"
                name="rohit"
                value={"plastic"}
                // checked={check}
                onChange={(e) => {
                  filterCategory(e.target.value, e.target.checked);
                  
                }}
                id=""
              />
              <label htmlFor="">Plastic</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
