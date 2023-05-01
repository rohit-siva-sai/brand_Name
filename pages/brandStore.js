import BrandComp from "@/components/brandComp";
import FilterSidebar from "@/components/filterSidebar";
import FilterSidebarBrand from "@/components/filterSidebarBrand";
import Pagination from "@/components/pagination";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Brand.module.css"

let PageSize = 10;

const BrandStore = ({
  categoryBrand,
  materialBrand,
  certificateBrand,
  applicationBrand,
  handleBrandStoreChecked,
  brandList
}) => {
  const [keyItem, setKeyItem] = useState(0);

  const [sliceData, setSliceData] = useState([]);

  // console.log(keyItem);

  const router = useRouter()
  

  const [currentPage, setCurrentPage] = useState(1);

  const sliceFun = (firstPageIndex, lastPageIndex) => {
    const currentData = brandList.slice(firstPageIndex, lastPageIndex);
    setSliceData(currentData);
  };

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    sliceFun(firstPageIndex, lastPageIndex);
  },[keyItem]);



  console.log('rohit sivas as');
  

  return (
    <div className={`flex ${styles.over} overflow-x-hidden    `}>
      <FilterSidebarBrand
        categoryBrand={categoryBrand}
        materialBrand={materialBrand}
        certificateBrand={certificateBrand}
        applicationBrand={applicationBrand}
        handleBrandStoreChecked={handleBrandStoreChecked}
      />
      <div className="px-4 w-full md:px-6 py-6 mx-auto relative h-max overflow-hidden">
        <div className="grid  h-fit py-6  grid-cols-2  md:grid-cols-5 gap-x-2 md:gap-x-8 gap-y-8">
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          
          
        </div>
      <div className="absolute bottom-0 flex justify-center w-full mx-auto " >
      <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={40}
            pageSize={PageSize}
            onPageChange={(page) => {
              setCurrentPage(page);
              setKeyItem(Math.random());
            }}
          />
      </div>
        <div>
       
        </div>
      </div>
    </div>
  );
};

export default BrandStore;
