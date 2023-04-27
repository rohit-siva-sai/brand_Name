import React from "react";

const Checkbox = ({ heading, value, filters, handle,material,type ,category}) => {
  return (
    <div className="flex items-center space-x-8">
      <input
        type={category=="category" ? "radio": "checkbox"}
        name={material=="material" ? "material" : type=="type" ? "type" : "category"}
        value={value}
        onChange={(e) => {
          if(value=="metal" || value=="plastic")  handle(value);
          filters(e.target.value, e.target.checked);
        }}
        id=""
        className="md:w-4 md:h-4 cursor-pointer "
      />
      <label htmlFor="" className="text-gray-400 font-semibold">
        {heading}
      </label>
    </div>
  );
};

export default Checkbox;
