import RfqList from "@/components/myRfq/rfqList";
import Sidebar from "@/components/myRfq/sidebar";
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";

const MyRfq = ({ user }) => {
  const rfqCollection = collection(db, "rfqs");
  const [rfqData, setRfqData] = useState([]);
  const getRfq = async (id) => {
    try {
      const data = await getDocs(rfqCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const rfq = filteredData.filter((item) => item.user == user.uid);
      setRfqData(rfq);
      console.log("ssassa", rfq);
      // console.log("usedatadfinprofile", userData[0]);
      // const sliceData = userData[0];
      // console.log(sliceData, "slicedata");

      // setProfileUser(sliceData);
      // console.log("rohit siva sai", profileUser);
      // // getCurrentUser(profileUser)
      // if (sliceData && sliceData.id === id) return true;
      // else return false;
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getRfq();
  }, [user]);
  return (
    <div className="h-[640px] overflow-hidden">
      <div className="flex">
        <Sidebar />
        <RfqList rfqData={rfqData} />
      </div>
    </div>
  );
};

export default MyRfq;
