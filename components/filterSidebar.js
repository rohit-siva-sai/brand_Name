import React, { useState } from "react";

const FilterSidebar = ({ products, filterCategory }) => {
  console.log(products, "filtersidebar");
  const [dropDown, setDropDown] = useState(true);

  return (
    <div className="w-1/5 h-96 sticky top-20 z-50 border overflow-y-hidden border-green-500">
      <div>
        <div className="flex flex-col" >
          <div
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className="cursor-pointer"
          >
            category
          </div>
          <div
            className={` transition flex flex-col  ${
              dropDown
                ? "translate-y-0  "
                : "-translate-y-[200%] "
            } duration-500 ease-in-out `}
          >
            <input
              type="checkbox"
              name="rohit"
              value="metal"
              id=""
              onChange={(e) => {
                filterCategory(e.target.value, e.target.checked);
              }}
            />
            <label htmlFor="">ashgvshgvs</label>
            <input
              type="checkbox"
              name="rohit"
              value={"plastic"}
              onChange={(e) => {
                filterCategory(e.target.value, e.target.checked);
              }}
              id=""
            />
            <label htmlFor="">asvjhsv</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
