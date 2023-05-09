import React from "react";
import { db } from "../config/firebase";
import { getDocs, addDoc, doc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Display from "@/components/productsPage/display";
import FilterSidebar from "@/components/productsPage/filterSidebar";
import AddtocartSidebar from "@/components/productsPage/addtocartSidebar";
import { BiSliderAlt } from "react-icons/bi";
import Pagination from "@/components/pagination/pagination";
import { useMemo } from "react";

let PageSize = 10;

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
  showCart,
  user,
  changeShowLogin
}) => {
  const [keyItem, setKeyItem] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [sliceData, setSliceData] = useState([]);

  // console.log(keyItem);
  // console.log('shoecart',showCart);
  

  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(page);

  // console.log(page, currentPage, "rohit siva sai");

  const sliceFun = (firstPageIndex, lastPageIndex) => {
    const currentData = products.slice(firstPageIndex, lastPageIndex);
    setSliceData(currentData);
  };

  useEffect(() => {
    products.map(() => {});
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    sliceFun(firstPageIndex, lastPageIndex);
  }, [keyItem, products]);

  const smallFilter = () => {
    setShowFilter(!showFilter);
  };
  const addedFunction = (id)=>{
    if(id in cart)
    {
      return true
    }
    else
    {
      return false
    }
  }
  // console.log(sliceData, "rohit siva sai");

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
      <div className="px-4 md:px-6 py-6  relative min-w-min mx-auto h-max overflow-y-hidden overflow-x-hidden">
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
        <div className="grid  h-fit py-6  grid-cols-2    md:grid-cols-5 gap-x-2 md:gap-x-8 gap-y-6    ">
          {sliceData.map((item) => {
            return (
              <Display
                id={item.id}
                title={item.title}
                imgUrl={item.image_url}
                addToCart={addToCart}
                cart={cart}
                key={key}
                removeFromCart={removeFromCart}
                adding={item.id in cart ? true : false}
              />
            );
          })}
        </div>
        <div className="absolute bottom-0 flex justify-center w-full mx-auto">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={products.length}
            pageSize={PageSize}
            onPageChange={(page) => {
              setCurrentPage(page);
              setPage(page);
              setKeyItem(Math.random());
            }}
          />
        </div>
      </div>
      <AddtocartSidebar
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        addToCart={addToCart}
        key={key}
        showCart={showCart}
        user={user}
        changeShowLogin={changeShowLogin}
      />
    </div>
  );
};

export default Products;
