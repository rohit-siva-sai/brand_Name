import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import CheckboxBrand from "./checkboxBrand";

const FilterSidebarBrand = ({
  categoryBrand,
  materialBrand,
  certificateBrand,
  applicationBrand,
  handleBrandStoreChecked
}) => {
  const [dropDown1, setDropDown1] = useState(true);
  const [dropDown2, setDropDown2] = useState(true);
  const [dropDown3, setDropDown3] = useState(true);
  const [dropDown4, setDropDown4] = useState(true);
  return (
    <div className="w-1/6  h-fit pl-4 md:block hidden border-r fixed my-0 top-20 z-40 ">
      <div>
        <div
          className={`flex flex-col ${
            dropDown1 ? " border-b mb-2" : "border-b-0 mb-0"
          }  px-2 overflow-y-hidden overflow-x-hidden `}
        >
          <div
            onClick={() => {
              setDropDown1(!dropDown1);
            }}
            className={`cursor-pointer flex items-center bg-white z-30 justify-between  `}
          >
            <p className="text-gray-600 text-sm font-bold">Category</p>
            <MdKeyboardArrowUp
              className={`${
                !dropDown1
                  ? "-rotate-180 text-gray-500 "
                  : "rotate-0 text-blue-500 "
              } duration-500 transition   text-xl `}
            />
          </div>
          <div
            className={` transition flex flex-col   ${
              dropDown1 ? "translate-y-0 py-1 pb-0 " : "-translate-y-[100px] py-0 pb-6 h-0 "
            } duration-500 ease-in-out `}
          >
            <div className={` flex flex-col  -space-y-2 `}>
              {categoryBrand.map((item) => (
                <CheckboxBrand
                  key={item.id}
                  item={item}
                  //   disable={item.label === "metal" ? category1 : category2}
                  //   handleDisable={handleDisable}
                  //   changeChecked={changeChecked}
                  //   handle={handleCategory}
                  handleBrandStoreChecked={handleBrandStoreChecked}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col ${
            dropDown2 ? " border-b mb-2" : "border-b-0 mb-0"
          }  px-2  overflow-y-hidden overflow-x-hidden `}
        >
          <div
            onClick={() => {
              setDropDown2(!dropDown2);
            }}
            className={`cursor-pointer flex items-center bg-white z-30 justify-between  `}
          >
            <p className="text-gray-600 text-sm font-bold">Material</p>
            <MdKeyboardArrowUp
              className={`${
                !dropDown2
                  ? "-rotate-180 text-gray-500 "
                  : "rotate-0 text-blue-500 "
              } duration-500 transition   text-xl `}
            />
          </div>
          <div
            className={` transition flex flex-col   ${
              dropDown2 ? "translate-y-0 py-1 pb-0 " : "-translate-y-[150px] py-0 pb-6 h-0 "
            } duration-500 ease-in-out  `}
          >
            <div className={`  flex flex-col  -space-y-2 `}>
              {materialBrand.map((item) => (
                <CheckboxBrand
                  key={item.id}
                  item={item}
                //   changeChecked={changeChecked}
                handleBrandStoreChecked={handleBrandStoreChecked}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col ${
            dropDown3 ? " border-b mb-2" : "border-b-0 mb-0"
          }  px-2 overflow-y-hidden overflow-x-hidden `}
        >
          <div
            onClick={() => {
              setDropDown3(!dropDown3);
            }}
            className={`cursor-pointer flex items-center bg-white z-30 justify-between  `}
          >
            <p className="text-gray-600 text-sm font-bold">Certifications</p>
            <MdKeyboardArrowUp
              className={`${
                !dropDown3
                  ? "-rotate-180 text-gray-500 "
                  : "rotate-0 text-blue-500 "
              } duration-500 transition   text-xl `}
            />
          </div>
          <div
            className={` transition flex flex-col   ${
              dropDown3 ? "translate-y-0 py-1 pb-0  " : "-translate-y-[100px] py-0 pb-6 h-0 "
            } duration-500 ease-in-out `}
          >
            <div className={` flex flex-col  -space-y-2 `}>
              {certificateBrand.map((item) => (
                <CheckboxBrand
                  key={item.id}
                  item={item}
                  //   disable={item.label === "metal" ? category1 : category2}
                  //   handleDisable={handleDisable}
                  //   changeChecked={changeChecked}
                  //   handle={handleCategory}
                  handleBrandStoreChecked={handleBrandStoreChecked}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col ${
            dropDown4 ? " border-b mb-2" : "border-b-0 mb-0"
          }  px-2  overflow-y-hidden overflow-x-hidden `}
        >
          <div
            onClick={() => {
              setDropDown4(!dropDown4);
            }}
            className={`cursor-pointer flex items-center bg-white z-30 justify-between  `}
          >
            <p className="text-gray-600 text-sm font-bold">Applications</p>
            <MdKeyboardArrowUp
              className={`${
                !dropDown4
                  ? "-rotate-180 text-gray-500 "
                  : "rotate-0 text-blue-500 "
              } duration-500 transition   text-xl `}
            />
          </div>
          <div
            className={` transition flex flex-col   ${
              dropDown4 ? "translate-y-0 py-1 pb-0 " : "-translate-y-[150px] py-0 pb-6 h-0 "
            } duration-500 ease-in-out  `}
          >
            <div className={`  flex flex-col  -space-y-2 `}>
              {applicationBrand.map((item) => (
                <CheckboxBrand
                  key={item.id}
                  item={item}
                //   changeChecked={changeChecked}
                handleBrandStoreChecked={handleBrandStoreChecked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebarBrand;
