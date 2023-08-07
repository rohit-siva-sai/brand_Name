import React from "react";
import { Cascader } from "antd";

import { useState } from "react";
import { useStore } from "@/useStore/details";
import { useEffect } from "react";
const arr1 = ["industrial chemical", "asylin", "more"];
const options = [
  {
    value: "industrial products",
    label: "industrial products",
    children: [
      {
        value: "industrial materials",
        label: "industrial materials",
        children: [
          {
            value: "steel craps",
            label: "steel craps",
          },
          {
            value: "steel metals",
            label: "steel metals",
          },
          {
            value: "steel hsdhgs",
            label: "steel hsdhgs",
          },
        ],
      },
      {
        value: "chemicals",
        label: "chemicals",
        children: [
          {
            value: "industrial chemical",
            label: "industrial chemical",
          },
          {
            value: "asysbbs",
            label: "asysbbs",
          },
          {
            value: "resins",
            label: "resins",
          },
        ],
      },
    ],
  },
  {
    value: "industrial safety and law enforcement",
    label: "industrial safety and law enforcement",
    children: [
      {
        value: "fire safety equipment",
        label: "fire safety equipment",
        children: [
          {
            value: "fire alarm",
            label: "fire alarm",
          },
          {
            value: "fire pipe",
            label: "fire pipe",
          },
          {
            value: "fire dress",
            label: "fire dress",
          },
        ],
      },
      {
        value: "workplace safety products",
        label: "workplace safety products",
        children: [
          {
            value: "boots",
            label: "boots",
          },
          {
            value: "gloves",
            label: "gloves",
          },
          {
            value: "shoes",
            label: "shoes",
          },
        ],
      },
    ],
  },

  {
    value: "industrial measuring, testing and inspection",
    label: "industrial measuring, testing and inspection",
    children: [
      {
        value: "distance measuring equipments",
        label: "distance measuring equipments",
        children: [
          {
            value: "laser",
            label: "laser",
          },
          {
            value: "wheels",
            label: "wheels",
          },
          {
            value: "tape",
            label: "tape",
          },
        ],
      },
      {
        value: "electrical measuring equipment",
        label: "electrical measuring equipment",
        children: [
          {
            value: "ammemter",
            label: "ammemter",
          },
          {
            value: "frequency meters",
            label: "frequency meters",
          },
          {
            value: "power & energy meters",
            label: "power & energy meters",
          },
        ],
      },
    ],
  },
];

const Category = () => {
  const [
    updateProductCategory,

    updateIncreaseProgress,
    updateDecreaseProgress,
    productCategory,
    productName,
    score,
    scoreProduct,
    updateScore,
  ] = useStore((store) => [
    store.updateProductCategory,

    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.productCategory,
    store.productName,
    store.score,
    store.scoreProduct,
    store.updateScore,
  ]);
  const [i, setI] = useState(1);
  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  useEffect(() => {
    filter(productName, options);
  }, [productName]);
  const [category, setCategory] = useState(productCategory);
  return (
    <div className="flex flex-col space-y-1">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Product Name<span className="text-red-600 text-lg">*</span>
      </label>
      <Cascader
        value={category}
        options={options}
        onChange={(value) => {
          setCategory(value);
        }}
        removeIcon={() => {
          if (!scoreProduct[1].score) {
            updateDecreaseProgress(5);
            setI(1);
          }
        }}
        placeholder="select the closest matching product category"
        onBlur={() => {
          updateProductCategory(category);
          category?.length != 0
            ? (scoreProduct[1].score = true)
            : (scoreProduct[1].score = false);
          if (scoreProduct[1].score && i == 1) {
            updateIncreaseProgress(5);
            setI(2);
          }
        }}
        showSearch={{
          filter,
        }}
        // onSearch={(value) => console.log(value)}
        className="w-3/5 font-semibold"
        // size="large"
        style={{ fontSize: "20px" }}
      />
    </div>
  );
};

export default Category;
