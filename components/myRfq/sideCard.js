import React from "react";
import { useState } from "react";
import {
  AiOutlineHome,
  AiFillFlag,
  AiOutlineDollar,
  AiOutlineSetting,
} from "react-icons/ai";
import { GiArcheryTarget } from "react-icons/gi";
import { TbWorldDollar } from "react-icons/tb";

import {
  MdOutlineKeyboardArrowUp,
  MdOutlineEmail,
  MdOutlineAccountCircle,
} from "react-icons/md";

const SideCard = ({ head, array, updateSubName, subName }) => {
  const [name, setName] = useState("");
  //   const [subName, setSubName] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="">
     
        <div
          className={`flex justify-between cursor-pointer items-center group px-4 hover:bg-gray-100  `}
          onClick={() => {
            setName(head);
            setShow(!show);
          }}
        >
          <div className={`flex space-x-2 px-2 py-2 rounded-xl items-center `}>
            {head == "Inquiries" ? (
              <MdOutlineEmail
                size={20}
                className={`font-bold ${ show ?"text-rose-600":"text-gray-800"} group-hover:text-rose-600`}
              />
            ) : head == "RFQs" ? (
              <GiArcheryTarget
                size={20}
                className={`font-bold ${ show ?"text-rose-600":"text-gray-800"} group-hover:text-rose-600`}
              />
            ) : head == "Orders" ? (
              <AiOutlineDollar
                size={20}
                className={`font-bold ${ show ?"text-rose-600":"text-gray-800"} group-hover:text-rose-600`}
              />
            ) : head == "My Account" ? (
              <MdOutlineAccountCircle
                size={20}
                className={`font-bold ${ show ?"text-rose-600":"text-gray-800"} group-hover:text-rose-600`}
              />
            ) : (
              <AiOutlineSetting
                size={20}
                className={`font-bold ${ show ?"text-rose-600":"text-gray-800"} group-hover:text-rose-600`}
              />
            )}
            <p
              className={`font-semibold text-gray-800 group-hover:text-rose-600 text-[17px] ${
                 show ? " text-rose-600" : " text-gray-800"
              }  `}
            >
              {head}
            </p>
          </div>
          <MdOutlineKeyboardArrowUp
            size={20}
            className={`text-gray-800 ${
              show ? "rotate-180" : "rotate-0"
            } transition-transform duration-300 `}
          />
        </div>
        {show && (
          <div className="flex flex-col space-y-2 my-2">
            {array.map((item) => {
              return (
                <div
                  className={`flex space-x-2 pl-10 py-2  cursor-pointer mx-4 font-semibold  rounded-lg items-center ${
                    subName == item.value
                      ? "bg-rose-600 text-white"
                      : "bg-transparent hover:bg-gray-100 text-gray-800"
                  } `}
                  onClick={() => {
                    updateSubName(item.value);
                  }}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
     
    </div>
  );
};

export default SideCard;
