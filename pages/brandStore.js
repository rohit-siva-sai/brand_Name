import BrandComp from "@/components/brandsPage/brandComp";
import FilterSidebar from "@/components/productsPage/filterSidebar";
import FilterSidebarBrand from "@/components/brandsPage/filterSidebarBrand";
import Pagination from "@/components/pagination/pagination";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Brand.module.css";

let PageSize = 5;

const BrandStore = ({
  categoryBrand,
  materialBrand,
  certificateBrand,
  applicationBrand,
  handleBrandStoreChecked,
  brandList,
}) => {
  const [keyItem, setKeyItem] = useState(0);

  const [sliceData, setSliceData] = useState([]);

  // console.log(keyItem);

  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);

  const sliceFun = (firstPageIndex, lastPageIndex) => {
    const currentData = brandList.slice(firstPageIndex, lastPageIndex);
    setSliceData(currentData);
  };

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    sliceFun(firstPageIndex, lastPageIndex);
  }, [keyItem]);

  console.log("rohit sivas as");

  return (
    <div className={`flex ${styles.over} overflow-x-hidden   `}>
      <FilterSidebarBrand
        categoryBrand={categoryBrand}
        materialBrand={materialBrand}
        certificateBrand={certificateBrand}
        applicationBrand={applicationBrand}
        handleBrandStoreChecked={handleBrandStoreChecked}
      />
      <div className="px-4 w-full md:px-6 py-4 mx-auto relative h-max overflow-hidden  pb-8 ">
        <div className="grid  h-fit   grid-cols-2  md:grid-cols-5 gap-x-2 md:gap-x-8 gap-y-4 mb-4 ">
          {brandList.map((item) => {
            return (
              <BrandComp
                companyUrl={item.companyUrl}
                bannerImage={item.bannerImage}
                Logo={item.Logo}
                companyName={item.companyName}
                description={item.description}
              />
            );
          })}
        </div>
        <div className="absolute -bottom-0  flex justify-center w-full mx-auto ">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={10}
            pageSize={PageSize}
            onPageChange={(page) => {
              setCurrentPage(page);
              setKeyItem(Math.random());
            }}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BrandStore;
