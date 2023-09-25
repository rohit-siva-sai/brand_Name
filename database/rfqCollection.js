import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";

const rfqCollection = collection(db, "rfqs");
// const [rfqData, setRfqData] = useState([]);
// let rfqs = []
// const [isLoading,setIsLoading] = useState(true)
 export const getRfq =  (id) => {
  try {
    const data =  getDocs(rfqCollection);
    return  data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    
    // const rfq = filteredData.filter((item) => item.user == user.uid);
    // setRfqData(rfq);
    // setIsLoading(false)
    // return filteredData
    // setRfqData(filteredData)
    // return filteredData
    // rfqs = filteredData
    // console.log("ssassa", rfq);
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
    // setIsLoading(false)
  }
};


// export const rfq =  rfqs