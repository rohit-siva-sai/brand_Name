import BrandComp from "@/components/brandsPage/brandComp";
import FilterSidebar from "@/components/productsPage/filterSidebar";
import FilterSidebarBrand from "@/components/brandsPage/filterSidebarBrand";
import Pagination from "@/components/pagination/pagination";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Brand.module.css";
import EmailSender from "@/components/brandsPage/emailSender";

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
  const [companyName, setCompanyName] = useState("");
  const [showEnquiry, setShowEnquiry] = useState();
  const [companyEmail, setCompanyEmail] = useState("");

  const handleEnquiry = (companyName, companyEmail) => {
    setCompanyName(companyName);
    setShowEnquiry(!showEnquiry);
    setCompanyEmail(companyEmail);
  };

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
    <div className={`flex ${styles.over} overflow-x-hidden pb-28 `}>
      <FilterSidebarBrand
        categoryBrand={categoryBrand}
        materialBrand={materialBrand}
        certificateBrand={certificateBrand}
        applicationBrand={applicationBrand}
        handleBrandStoreChecked={handleBrandStoreChecked}
      />
      <div className="px-4 w-full md:ml-[250px] bg-white md:px-6 py-4 mx-auto relative h-max overflow-hidden  pb-8 ">
        <div className="grid  h-fit   grid-cols-2  md:grid-cols-5 gap-x-2 md:gap-x-4 gap-y-4 mb-4 ">
          {brandList.map((item) => {
            return (
              <BrandComp
                companyUrl={item.companyUrl}
                bannerImage={item.bannerImage}
                Logo={item.Logo}
                companyName={item.companyName}
                description={item.description}
                companyEmail={item.companyEmail}
                handleEnquiry={handleEnquiry}
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
        <EmailSender
          companyName={companyName}
          showEnquiry={showEnquiry}
          companyEmail={companyEmail}
        />
      </div>
    </div>
  );
};

export default BrandStore;
