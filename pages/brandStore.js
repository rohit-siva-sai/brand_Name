import BrandComp from "@/components/brandComp";
import FilterSidebar from "@/components/filterSidebar";
import FilterSidebarBrand from "@/components/filterSidebarBrand";
import React from "react";

const BrandStore = ({
  categoryBrand,
  materialBrand,
  certificateBrand,
  applicationBrand,
  handleBrandStoreChecked
}) => {
  return (
    <div className="flex overflow-hidden h-fit ">
      <FilterSidebarBrand
        categoryBrand={categoryBrand}
        materialBrand={materialBrand}
        certificateBrand={certificateBrand}
        applicationBrand={applicationBrand}
        handleBrandStoreChecked={handleBrandStoreChecked}
      />
      <div className="px-4 w-full md:px-6 py-6 mx-auto h-screen overflow-y-scroll">
        <div className="grid  h-fit py-6 pb-48  grid-cols-2  md:grid-cols-5 gap-x-2 md:gap-x-8 gap-y-8">
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
          <BrandComp />
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
      </div>
    </div>
  );
};

export default BrandStore;
