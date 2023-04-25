import React from "react";
import { db } from "../config/firebase";
import { getDocs, addDoc, doc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Display from "@/components/display";
import FilterSidebar from "@/components/filterSidebar";
import AddtocartSidebar from "@/components/addtocartSidebar";
import { useStore } from "zustand";

const Products = ({products,filterCategory}) => {

  return (
    <div className="flex " >
        <FilterSidebar products={products} filterCategory={filterCategory} />
      <div className="grid py-8 h-fit mx-auto px-6 grid-cols-5 gap-x-8 gap-y-8 border border-red-500  " >
        {products.map((item) => {
          return <Display title={item.title} imgUrl={item.image_url} />;
        })}
      </div>
      <AddtocartSidebar/>
    </div>
  );
};

export default Products;
