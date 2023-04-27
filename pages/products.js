import React from "react";
import { db } from "../config/firebase";
import { getDocs, addDoc, doc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Display from "@/components/display";
import FilterSidebar from "@/components/filterSidebar";
import AddtocartSidebar from "@/components/addtocartSidebar";

const Products = ({
  products,
  filterCategory,
  addToCart,
  cart,
  removeFromCart,
  clearCart,
  key,
  filterMaterial,
  filterType,
  items
}) => {
  console.log(products, "rohit");

  return (
    <div className="flex  ">
      <FilterSidebar
        products={products}
        filterCategory={filterCategory}
        filterMaterial={filterMaterial}
        filterType={filterType}
      />
      <div className="px-2 md:px-6 py-8 mx-auto " >
        <p className="text-gray-700 font-semibold" >Search all Products</p>
        <p className="text-xs text-gray-400 pt-2 font-semibold" >Showing {products.length} out of {items.length} products </p>
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
