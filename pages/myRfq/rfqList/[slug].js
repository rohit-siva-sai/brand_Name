import Sidebar from "@/components/myRfq/sidebar";
import SimpleSideBar from "@/components/myRfq/simpleSideBar";
import Admin from "@/components/slug/admin";
import RequestDetails from "@/components/slug/requestDetails";
import { db } from "@/config/firebase";
import { Drawer } from "antd";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Post = () => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(false);

  const onClose = () => {
    setShowFilter(false);
  };
  const showDrawer = () => {
    setShowFilter(!showFilter);
  };
  const [rfqData, setRfqData] = useState(null);
  const getRfq = async (id) => {
    try {
      const rfqRef = doc(db, "rfqs", id); // 'people' is the collection name
      const rfqDoc = await getDoc(rfqRef);
      if (rfqDoc.exists()) {
        const rfqdata = rfqDoc.data();
        return rfqdata;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
      return null;
    }
  };

  const SingleRfq = async () => {
    const data = await getRfq(router.query.slug);
    setRfqData({ ...data });
    console.log("hgsahgsxhgs", data);
  };

  useEffect(() => {
    SingleRfq();
  }, [router]);
  return (
    <div className="flex md:h-[640px] overflow-y-hidden  ">
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
      <div className="bg-gray-100 flex-1 px-4 md:h-[640px] pb-8 overflow-y-scroll ">
      <p className="font-light text-sm py-4">
        RFQs  &nbsp;/&nbsp;  All &nbsp; /&nbsp;  <span className="font-normal">Quotes Received</span>
      </p>
        <div className="flex  flex-col-reverse md:flex-row space-y-reverse space-y-6  md:space-x-3  ">
          <Admin />
          <RequestDetails rfqData={rfqData}  />
        </div>
      </div>
    </div>
  );
};

export default Post;
