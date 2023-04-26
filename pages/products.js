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
}) => {
  return (
    <div className="flex">
      <FilterSidebar products={products} filterCategory={filterCategory} />
      <div className="grid py-8 h-fit mx-auto px-2 md:px-6 grid-cols-2  md:grid-cols-5 gap-x-2 md:gap-x-8 gap-y-8 border border-red-500  ">
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
