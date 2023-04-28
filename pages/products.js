import React from "react";
import { db } from "../config/firebase";
import { getDocs, addDoc, doc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Display from "@/components/display";
import FilterSidebar from "@/components/filterSidebar";
import AddtocartSidebar from "@/components/addtocartSidebar";
import { BiSliderAlt } from "react-icons/bi";

const Products = ({
  products,

  addToCart,
  cart,
  removeFromCart,
  clearCart,
  key,

  items,
  materialMetal,
  typeMetal,
  materialPlastic,
  typePlastic,
  category,
  changeChecked,
}) => {
  const [showFilter, setShowFilter] = useState(false);

  const smallFilter = () => {
    setShowFilter(!showFilter);
  };
  console.log(products, "rohit");

  return (
    <div className="flex overflow-hidden h-fit ">
      <FilterSidebar
        products={products}
        showFilter={showFilter}
        materialMetal={materialMetal}
        typeMetal={typeMetal}
        materialPlastic={materialPlastic}
        typePlastic={typePlastic}
        category={category}
        changeChecked={changeChecked}
      />
      <div className="px-4 md:px-6 py-6 min-w-min mx-auto h-screen overflow-y-scroll">
        <div className="flex justify-between items-center md:block">
          <div>
            <p className="text-gray-700 font-semibold">Search all Products</p>
            <p className="text-xs text-gray-400 pt-2 font-semibold">
              Showing {products.length} out of {items.length} products{" "}
            </p>
          </div>
          <div
            onClick={smallFilter}
            className="flex space-x-2 py-1 items-center rounded-md px-8 border border-blue-500 text-blue-500 md:hidden"
          >
            <BiSliderAlt />
            <p className="text-base font-bold ">Filters</p>
          </div>
        </div>
        <div className="grid  h-fit py-6  grid-cols-2  md:grid-cols-5 gap-x-2 md:gap-x-8 gap-y-8    ">
          {products.map((item) => {
            return (
              <Display
                id={item.id}
                title={item.title}
                imgUrl={item.image_url}
                addToCart={addToCart}
                cart={cart}
                key={key}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
      </div>
      <AddtocartSidebar
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        addToCart={addToCart}
        key={key}
      />
    </div>
  );
};

export default Products;
