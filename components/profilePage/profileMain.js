import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import ContentEditable from "react-contenteditable";
import { MdModeEdit } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import Address from "./address";
import { useRouter } from "next/router";

const ProfileMain = ({ profileUser, logOut, updateProfileUser }) => {
  console.log('user',profileUser)

  const refname = useRef();
  const refemail = useRef();
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  // const [userNmae, setUserName] = useState(userName);
  const router = useRouter()
  const text = useRef();
  const email = useRef();
  const [showTickName, setShowTickName] = useState(false);
  const [showTickEmail, setShowTickEmail] = useState(false);
  const changeFocusName = () => {
    refname.current.focus();
    console.log(refname);
  };
  const changeFocusEmail = () => {
    refemail.current.focus();
  };
  useEffect(() => {
    
  }, [router]);
  const handleChangeName = (evt) => {
    setShowTickName(true);
    text.current = evt.target.value;
    console.log(text.current);
    setProfileName(evt.target.value);

    //   setShowTick(true);
  };
  useEffect(()=>{
    setProfileName("")
    setProfileEmail(profileUser?.email)
    text.current = profileName;
    email.current = profileEmail;
  },[profileUser])

  const handleChangeEmail = (evt) => {
    setShowTickEmail(true);
    email.current = evt.target.value;
    setProfileEmail(email.current);
  };

  const handleBlurName = () => {
    setShowTickName(false);
    updateProfileUser(profileUser?.id, profileName,profileEmail);
    console.log(text.current);
  };
  const handleBlurEmail = () => {
    // setShowTickName(false);
    setShowTickEmail(false);
    updateProfileUser(profileUser?.id, profileName,profileEmail);

    console.log(text.current);
  };

  return (
    <div className="w-full md:ml-[400px]  pb-3a6  pr-24 pt-6">
      <div className=" bg-white border  px-8 flex flex-col space-y-2  shadow-md rounded-xl">
        <div className="py-3 border-b">
          <p className="font-semibold text-lg text-gray-700">My Profile</p>
        </div>
        <div className="pt-4 border-b">
          <p className="text-xs w-max font-semibold  text-gray-400">
            Full Name
          </p>
          <div className="flex justify-between pt-1 space-x-8">
            <ContentEditable
              innerRef={refname}
              html={profileName}
              //   onBlur={handleBlurName}
              tagName="username"
              name="username"
              onChange={handleChangeName}
              className="focus:border-[3px] text-gray-600 font-semibold rounded-md flex-1 focus:py-2 focus:px-2 border-blue-500 text-base outline-none"
            />
            {showTickName ? (
              <div
                onClick={handleBlurName}
                className="p-2 hover:bg-blue-100 rounded-md cursor-pointer"
              >
                <AiOutlineCheck className="text-2xl text-blue-500" />
              </div>
            ) : (
              <div
                onClick={changeFocusName}
                className="p-2 hover:bg-blue-100 rounded-md cursor-pointer"
              >
                <MdModeEdit className="text-blue-500 text-2xl" />
              </div>
            )}
          </div>
        </div>
        <div className="pt-4 border-b">
          <p className="text-xs w-max font-semibold  text-gray-400">Email</p>
          <div className="flex justify-between pt-1 space-x-8">
            <ContentEditable
              innerRef={refemail}
              html={profileEmail}
              name="useremail"
              //   onBlur={handleBlurEmail}
              onChange={handleChangeEmail}
              tagName="useremail"
              className="focus:border-[3px] text-gray-600 font-semibold rounded-md flex-1 focus:py-2 focus:px-2 border-blue-500 text-base outline-none"
            />
            {showTickEmail ? (
              <div
                onClick={handleBlurEmail}
                className="p-2 hover:bg-blue-100 rounded-md cursor-pointer"
              >
                <AiOutlineCheck className="text-2xl text-blue-500" />
              </div>
            ) : (
              <div
                onClick={changeFocusEmail}
                className="p-2 hover:bg-blue-100 rounded-md cursor-pointer"
              >
                <MdModeEdit className="text-blue-500 text-2xl" />
              </div>
            )}
          </div>
        </div>
        <div className="pt-4 pb-4 border-b">
          <p className="text-xs w-max font-semibold  text-gray-400">
            Mobile Number
          </p>
          {/* <div className="flex justify-between pt-1 space-x-8">
            
          </div> */}
          <p className="text-gray-700 font-semibold ">
            {profileUser?.phone_number
              && profileUser.phone_number
             }
          </p>
        </div>
      </div>
      <Address heading="Delivery Address" />
      <Address heading="Business Address" />
      <div
        className={`w-full  flex justify-between h-[50px] items-center mt-4 border rounded-xl bg-white shadow-md px-8 `}
      >
        <p className="font-semibold text-gray-700">LogOut</p>
        <div
          onClick={logOut}
          className="hover:bg-blue-100 py-2 px-2 pr-2 cursor-pointer rounded-md"
        >
          <FaPowerOff className="text-blue-500 text-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
