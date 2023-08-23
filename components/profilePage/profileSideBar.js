import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdLocationOn, MdShoppingBag } from "react-icons/md";

const ProfileSideBar = ({ profileUser }) => {
  return (
    <div>
      <div className="w-1/4 fixed left-0  border-r min-h-full bg-gray-100">
        <div className="flex flex-col space-y-8 items-center pt-10">
          <div className="flex items-center space-x-4 bg-white pl-4 py-4 rounded-xl shadow-md w-3/5">
            <FaRegUserCircle className="text-gray-800 text-5xl " />
            <div>
              <p className="font-semibold text-sm text-gray-400">Name</p>
              <p className="font-bold">
                {profileUser?.username?.lastName && profileUser?.username?.lastName}
              </p>
            </div>
          </div>
          <div className="flex flex-col shadow-md rounded-xl divide-y-2    bg-white p-2 w-3/5">
            <div className="flex items-center space-x-5 py-2 cursor-pointer my-1  hover:bg-gray-100 rounded-lg  pl-6">
              <MdLocationOn className="text-blue-500 text-3xl" />
              <p className="font-bold text-blue-500">My Address</p>
            </div>
            <Link href={"/myRfq"}>
              <div className="flex items-center my-1   space-x-5 py-2 cursor-pointer  hover:bg-gray-100 rounded-lg  pl-6">
                <MdShoppingBag className="text-gray-500 text-3xl" />
                <p className="font-bold text-gray-500">My Orders</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
