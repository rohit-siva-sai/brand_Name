import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import Checkbox from "../checkbox";
import CheckboxProton from "./checkboxProton";

const FilterSidebar = ({
  products,
  materialMetal,
  typeMetal,
  materialPlastic,
  typePlastic,
  category,
  changeChecked,
  showFilter
}) => {
  
  const [dropDown1, setDropDown1] = useState(true);
  const [dropDown2, setDropDown2] = useState(true);
  const [dropDown3, setDropDown3] = useState(true);
  const [categoryMain, setCategoryMain] = useState("metal");
  // const [material, setMaterial] = useState("material");
  const [disable, setDisable] = useState(false);
  const [materaial1, setMaterial1] = useState(false);
  const [materaial2, setMaterial2] = useState(false);
  const [materaial3, setMaterial3] = useState(false);

  const [category1, setCategory1] = useState(false);
  const [category2, setCategory2] = useState(false);

  const [type1, setType1] = useState(false);
  const [type2, setType2] = useState(false);
  const [type3, setType3] = useState(false);
  const [type, setType] = useState("type");

  const [width,setWidth] = useState()

  const handleCategory = (value) => {

    setCategoryMain(value);

    // setMaterial(categoryMain=="metal" ? materialMetal : materialPlastic)
  };

  const handleDisable = (value) => {
    if (value == "mild_steel" || value == "nylon") {
      setMaterial2(!materaial2);
      setMaterial3(!materaial3);
    } else if (value == "stainless_steel" || value == "abs") {
      setMaterial1(!materaial1);
      setMaterial3(!materaial3);
    } else if (value == "aluminium" || value == "pva") {
      setMaterial1(!materaial1);
      setMaterial2(!materaial2);
    } else if (value == "long_products" || value == "round") {
      setType2(!type2);
      setType3(!type3);
    } else if (value == "lat_products" || value == "long") {
      setType1(!type1);
      setType3(!type3);
    } else if (value == "semi_furnished") {
      setType1(!type1);
      setType2(!type2);
    } else if (value == "metal") {
      setCategory2(!category2);
    } else if (value == "plastic") {
      setCategory1(!category1);
    }
  };
  const [material, setMaterial] = useState(materialMetal);
  useEffect(() => {

    setWidth(window.innerWidth)
    // console.log(val);
    
    let set = [];
  });

  return (
    <div className={`transition-all duration-500   ${!(width < 500) ? "w-1/5 h-full pl-4 md:block  border-r sticky my-0 top-8 z-40"  :  showFilter ? "fixed left-0 top-36 z-40 pt-4 bg-white border pr-6 ": "pt-4 fixed -left-72 border pr-6 top-36 bg-white" } }`}>
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
              dropDown1 ? "translate-y-0  " : "-translate-y-[300%] h-0 "
            } duration-500 ease-in-out py-4 `}
          >
            <div className={`  flex flex-col  space-y-0 `}>
              {category.map((item) => (
                <CheckboxProton
                  key={item.id}
                  item={item}
                  disable={item.label === "metal" ? category1 : category2}
                  handleDisable={handleDisable}
                  changeChecked={changeChecked}
                  handle={handleCategory}
                />
              ))}
              {/* <Checkbox
                heading={"Metals"}
                value="metal"
                filters={filterCategory}
                handle={handleCategory}
                category={"category"}
                handleDisable={handleDisable}
                disable={category1}
              />

              <Checkbox
                heading={"Plastic"}
                value="plastic"
                filters={filterCategory}
                handle={handleCategory}
                category={"category"}
                handleDisable={handleDisable}
                disable={category2}
              /> */}
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
              dropDown2 ? "translate-y-0  " : "-translate-y-[400%] h-0 "
            } duration-500 ease-in-out py-4 `}
          >
            <div className={`  flex flex-col  space-y-0 `}>
              {categoryMain == "metal"
                ? materialMetal.map((item) => (
                    <CheckboxProton
                      key={item.id}
                      item={item}
                      changeChecked={changeChecked}
                    />
                  ))
                : materialPlastic.map((item) => (
                    <CheckboxProton
                      key={item.id}
                      item={item}
                      changeChecked={changeChecked}
                    />
                  ))}
              {/* <Checkbox
                heading={category == "metal" ? "Mild Steel" : "Nylon"}
                value={category == "metal" ? "mild_steel" : "nylon"}
                filters={filterMaterial}
                material={material}
                handleDisable={handleDisable}
                disable={materaial1}
              />

              <Checkbox
                heading={category == "metal" ? "Stainless Steel" : "ABS"}
                value={category == "metal" ? "stainless_steel" : "abs"}
                filters={filterMaterial}
                material={material}
                handleDisable={handleDisable}
                disable={materaial2}
              />
              <Checkbox
                heading={category == "metal" ? "Aluminium" : "PVA"}
                value={category == "metal" ? "aluminium" : "pva"}
                filters={filterMaterial}
                material={material}
                handleDisable={handleDisable}
                disable={materaial3}
              /> */}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col ${
            dropDown3 ? " border-b-0 mb-2" : "border-b-0 mb-0"
          }  px-2  overflow-y-hidden overflow-x-hidden `}
        >
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
              dropDown3 ? "translate-y-0  " : "-translate-y-[400%] h-0 "
            } duration-500 ease-in-out py-4 `}
          >
            <div className={`  flex flex-col  space-y-0 `}>
              {categoryMain == "metal"
                ? typeMetal.map((item) => (
                    <CheckboxProton
                      key={item.id}
                      item={item}
                      changeChecked={changeChecked}
                    />
                  ))
                : typePlastic.map((item) => (
                    <CheckboxProton
                      key={item.id}
                      item={item}
                      changeChecked={changeChecked}
                    />
                  ))}
            </div>
            {/* <div className={`  flex flex-col  space-y-3 `}>
              <Checkbox
                heading={category == "metal" ? "Long Products" : "Round"}
                value={category == "metal" ? "long_products" : "round"}
                filters={filterType}
                type={type}
                handleDisable={handleDisable}
                disable={type1}
              />

              <Checkbox
                heading={category == "metal" ? "Flat Products" : "Long"}
                value={category == "metal" ? "flat_products" : "long"}
                filters={filterType}
                type={type}
                handleDisable={handleDisable}
                disable={type2}
              />
              {category == "metal" && (
                <Checkbox
                  heading={"Semi Furnished"}
                  value="semi_furnished"
                  filters={filterType}
                  type={type}
                  handleDisable={handleDisable}
                  disable={type3}
                />
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
