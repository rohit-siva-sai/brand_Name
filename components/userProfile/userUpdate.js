import { User } from "@/useStore/user";
import React from "react";
import UserName from "./userUpdate/username";
import JobDetail from "./userUpdate/jobDetail";
import Email from "./userUpdate/email";
import Address from "./userUpdate/address";
import Website from "./userUpdate/website";
import Linkedin from "./userUpdate/linkedin";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

const UserUpdate = ({ getUser }) => {
  const [
    phoneNumber,
    userId,
    username,
    address,
    job,
    comapnyWebsite,
    linkedinProfile,
    email,
  ] = User((store) => [
    store.phoneNumber,
    store.userId,
    store.username,
    store.userAddress,
    store.job,
    store.comapnyWebsite,
    store.linkedinProfile,
    store.userEmail,
  ]);
  console.log("usessssr", userId);

  console.log("update", phoneNumber);
  const updateUser = async (id) => {
    const userDoc = doc(db, "users", id);

    await updateDoc(userDoc, {
      username,
      address,
      job,
      comapnyWebsite,
      linkedinProfile,
      email,
    });
    console.log("updated successfully");
    getUser(id);
  };

  return (
    <div className="relative">
      <div className="py-3 relative px-4 h-[500px] overflow-y-scroll  border-t flex flex-col space-y-2">
        <UserName />
        <JobDetail />
        <Email />
        <Address />
        <Website />
        <Linkedin />
      </div>
      <div className="bg-gray-50 sticky flex justify-center -bottom-5  py-2 ">
        <div
          className="bg-rose-500 py-1 px-8 hover:opacity-80 rounded-3xl font-semibold text-white cursor-pointer"
          onClick={() => {
            updateUser(userId);
          }}
        >
          Save
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
