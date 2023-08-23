import Link from "next/link";
import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import SideCard from "./sideCard";
import { SideBar } from "@/useStore/sideBar";

const Inquiries = [
  { label: "All", value: "allInquiries", link: "" },
  { label: "Starred", value: "starredInquiries", link: "" },
];
const Rfqs = [
  { label: "All", value: "allRfqs", link: "" },
  { label: "Starred", value: "starredRfqs", link: "" },
];

const Orders = [
  { label: "All Orders", value: "all orders", link: "" },
  { label: "My Coupons", value: "coupons", link: "" },
  { label: "My Reviews", value: "reviews", link: "" },
];

const MyAccount = [
  { label: "My Favourite", value: "favourite", link: "" },
  { label: "User Profile", value: "profile", link: "/myRfq/userProfile" },
  { label: "Business", value: "bussiness", link: "" },
];

const Settings = [
  { label: "Security Setting", value: "security", link: "" },
  { label: "Change Password", value: "password", link: "" },
  { label: "Business Card", value: "card", link: "" },
];

const Sidebar = () => {
  const [name, setName] = useState("");
  const [linkActive, titleActive, updateLinkActive, updateTitleActive] =
  SideBar((store) => [
    store.linkActive,
    store.titleActive,
    store.updateLinkActive,
    store.updateTitleActive,
  ]);
  const updateSubName = (value) => {
    setSubName(value);
  };
  const [subName, setSubName] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="h-[640px]  bg-white  py-4 overflow-y-scroll w-1/6 scroll-smooth">
      <div className="flex flex-col space-y-2">
        <>
          <div
            className={`flex space-x-2 mx-4  px-2 cursor-pointer  py-2 rounded-xl items-center ${
              linkActive == "home"
                ? "bg-rose-600 text-white"
                : "bg-transparent hover:bg-gray-100 text-gray-800"
            } `}
            onClick={() => {
              updateLinkActive("home")
              updateTitleActive("home")
            }}
          >
            <AiOutlineHome size={20} className={`font-bold`} />
            <p
              className={`font-semibold text-gray-800 text-lg ${
                linkActive == "home" ? " text-white" : " text-gray-800"
              }  `}
            >
              Home
            </p>
          </div>
        </>
        <SideCard
          head={"Inquiries"}
          array={Inquiries}
          updateSubName={updateSubName}
          subName={subName}
    
        />
        <SideCard
          head={"RFQs"}
          array={Rfqs}
          updateSubName={updateSubName}
          subName={subName}
        />

        <SideCard
          head={"Orders"}
          array={Orders}
          updateSubName={updateSubName}
          subName={subName}
        />
        <SideCard
          head={"My Account"}
          array={MyAccount}
          updateSubName={updateSubName}
          subName={subName}
        />
        <SideCard
          head={"Settings"}
          array={Settings}
          updateSubName={updateSubName}
          subName={subName}
        />
      </div>
    </div>
  );
};

export default Sidebar;
