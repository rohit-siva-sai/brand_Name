import React from "react";
import UserUpdate from "./userUpdate";
import { useState } from "react";
import { Modal } from "antd";
import { HiPencil } from "react-icons/hi";
import Icon from "./DetailCard";
import DetailCard from "./DetailCard";
import { MdMailOutline } from "react-icons/md";
import { FiLink, FiPhone } from "react-icons/fi";
import { AiOutlineHome, AiOutlineLinkedin } from "react-icons/ai";
import { User } from "@/useStore/user";
import { useEffect } from "react";

const UserDetails = ({profileUser,getUser}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [
    updateUserName,
    updateJob,
    updateAddress,
    updateUserEmail,
    updateCompanyWebsite,
    updateLinkedinProfile,
    
  ] = User((store) => [
    store.updateUserName,
    store.updateJob,
    store.updateAddress,
    store.updateUserEmail,
    store.updateCompanyWebsite,
    store.updateLinkedinProfile,
  ]);
  console.log('userdeatils',profileUser);
  useEffect(()=>{
    updateUserName(profileUser.username)
    updateJob(profileUser.job)
    updateAddress(profileUser.address)
    updateUserEmail(profileUser.email)
    updateCompanyWebsite(profileUser.comapnyWebsite)
    updateLinkedinProfile(profileUser.linkedinProfile)
  },[profileUser])
  
  return (
    <div className="  ">
      <p className="font-light text-sm py-4">
        RFQs / <span className="font-normal">User Profile</span>
      </p>
      <div className="bg-white rounded-lg  ">
        <div className="px-6 flex py-4 justify-between items-center">
          <p className="font-medium text-xl text-gray-800">Conatct Info</p>
          <div
            onClick={() => {
              setModalOpen(true);
            }}
            className="cursor-pointer"
          >
            <HiPencil size={25} className="hover:text-rose-500" />
          </div>

          <Modal
            title="Edit Contact Info"
            centered
            open={modalOpen}
            //   onOk={() => setModalOpen(false)}
            footer={null}
            onCancel={() => setModalOpen(false)}
            width={600}
          >
            <UserUpdate getUser={getUser} />
          </Modal>
        </div>
        <div className="flex justify-center py-8 border-t divide-x">
          <div className="flex flex-col items-center  space-y-3  w-1/4 ">
            <div className="w-28 h-28 rounded-full border bg-gray-s100 "></div>
            <p className="font-semibold text-lg text-gray-700">
              {profileUser.username?.firstName} {profileUser.username?.lastName}
            </p>
          </div>
          <div className="w-3/4 pl-24">
            <div className="flex flex-col space-y-3">
              <DetailCard
                Icon={MdMailOutline}
                title={"Email"}
                value={profileUser.email}
              />
              <DetailCard Icon={FiPhone} title={"Phone"} value={profileUser.phone_number} />
              <DetailCard
                Icon={AiOutlineHome}
                title={"Office Address"}
                value={profileUser.address?.country}
              />
              <DetailCard
                Icon={FiLink}
                title={"Comapny Website"}
                value={profileUser?.comapnyWebsite}
              />
              <DetailCard
                Icon={AiOutlineLinkedin}
                title={"Linkedin Profile"}
                value={profileUser.linkedinProfile}
              />
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
