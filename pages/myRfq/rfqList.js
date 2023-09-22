import AllRfqs from "@/components/myRfq/allRfqs";
import Sidebar from "@/components/myRfq/sidebar";
import SimpleSideBar from "@/components/myRfq/simpleSideBar";
import { db } from "@/config/firebase";
import { Drawer } from "antd";
import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";

const RfqList = ({ user,rfqData }) => {
  const [showFilter, setShowFilter] = useState(false);

  const onClose = () => {
    setShowFilter(false);
  };
  const showDrawer = () => {
    setShowFilter(!showFilter);
  };
  
  // useEffect( () => {
  //    getRfq();
  // }, []);
  return (
    <div className="md:h-[640px] md:overflow-hidden">
      <div className="flex">
        <div className=" hidden md:block w-1/6">
          {/* <Sidebar /> */}
          <SimpleSideBar />
        </div>

        <Drawer
          placement={"left"}
          width={300}
          height={825}
          className=" md:hidden block  "
          open={showFilter}
          onClose={onClose}
        >
          <SimpleSideBar />
        </Drawer>
        <AllRfqs rfqData={rfqData} />
      </div>
    </div>
  );
};

export default RfqList;
