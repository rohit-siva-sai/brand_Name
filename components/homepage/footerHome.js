import Link from "next/link";
import React from "react";
import {
  BsFillChatLeftTextFill,
  BsFillTelephoneFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { MdQuestionAnswer } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";

const FooterHome = () => {
  return (
    <div className="py-6 ">
      <div>
        <div className="flex md:justify-evenly overflow-hidden justify-center space-x-4 md:space-x-0 md:px-24">
          <div className="flex space-x-2 md:space-x-4 items-center ">
            <BsFillChatLeftTextFill className="text-2xl text-orange-500" />
            <p className="font-bold text-lg">Chat With Us</p>
          </div>
          <div className="flex space-x-2 md:space-x-4 items-center ">
            <BsFillTelephoneFill className="text-2xl text-orange-500" />
            <p className="font-bold text-lg">Call Us</p>
          </div>
          <div className="flex space-x-2 md:space-x-4 items-center ">
            <MdQuestionAnswer className="text-3xl text-orange-500" />
            <p className="font-bold text-lg">FAQ</p>
          </div>
        </div>
        <div className="flex md:flex-row md:space-y-0 space-y-4 flex-col md:items-start items-center md:justify-evenly pt-16">
          <div className=" w-56" >
            <picture>
              <img src="/renorun.png" alt="" className=" " />
            </picture>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="font-bold text-lg ">Customer Services</p>
            <p className="font-semibold text-gray-500">Contact</p>
            <p className="font-semibold text-gray-500">Locations</p>
            <p className="font-semibold text-gray-500">Pricing</p>
            <p className="font-semibold text-gray-500">FAQ</p>
          </div>
          <div className="flex flex-col md:items-start items-center space-y-2">
            <p className="font-bold text-lg ">Company</p>
            <p className="font-semibold text-gray-500">About</p>
            <p className="font-semibold text-gray-500">Management</p>
            <p className="font-semibold text-gray-500">Carrers</p>
          </div>
          <div className="flex-col space-y-6 ">
            <div className="flex space-x-4">
              <Link href={""} className=" ">
                <picture>
                  <img
                    src="https://d5nfy7n2jvqm2.cloudfront.net/new-buyer-imgs/Appstore.png"
                    alt=""
                    className="w-36"
                  />
                </picture>
              </Link>
              <Link href={""}>
                <picture>
                  <img
                    src="https://d5nfy7n2jvqm2.cloudfront.net/new-buyer-imgs/Playstore.png"
                    alt=""
                    className="w-36"
                  />
                </picture>
              </Link>
            </div>
            <div className="flex space-x-2">
              <Link href={""}>
                <div
                  className="w-12 flex items-center justify-center h-12
               rounded-full p-2 bg-gray-100 "
                >
                  <RiFacebookFill className="text-3xl " />
                </div>
              </Link>
              <Link href={""}>
                <div
                  className="w-12 flex items-center justify-center h-12
               rounded-full p-2 bg-gray-100 "
                >
                  <GrInstagram className="text-2xl " />
                </div>
              </Link>
              <Link href={""}>
                <div
                  className="w-12 flex items-center justify-center h-12
               rounded-full p-2 bg-gray-100 "
                >
                  <GrLinkedinOption className="text-2xl " />
                </div>
              </Link>
              <Link href={""}>
                <div
                  className="w-12 flex items-center justify-center h-12
               rounded-full p-2 bg-gray-100 "
                >
                  <BsTwitter className="text-2xl " />
                </div>
              </Link>
              <Link href={""}>
                <div
                  className="w-12 flex items-center justify-center h-12
               rounded-full p-2 bg-gray-100 "
                >
                  <BsYoutube className="text-2xl " />
                </div>
              </Link>
            </div>
           <div>
           <Link href="">
              <div className="flex items-center space-x-4">
                <picture>
                  <img
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/61913/canada-flag-emoji-clipart-xl.png"
                    alt=""
                    className="w-10 h-10 opacity-70"
                  />
                </picture>
                <p className="font-semibold">Go to CA Website</p>
              </div>
            </Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
