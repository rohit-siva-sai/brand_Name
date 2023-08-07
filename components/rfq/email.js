
import { useStore } from "@/useStore/details";
import React from "react";
import { useState } from "react";

const Email = () => {
  const [
    updateEmail,
    updateIncreaseProgress,
    updateDecreaseProgress,

    score,

    email,
  ] = useStore((store) => [
    store.updateEmail,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.score,
    store.email,
  ]);
  const [userMail, setUserMail] = useState(email);
  const [i, setI] = useState(1);
//   console.log("sds", unitPrice);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Email<span className="text-red-600 text-lg">*</span>
      </label>
      <input
        type="email"
        value={userMail}
        id="productName"
        onChange={(e) => {
          setUserMail(e.target.value);
        }}
        onBlur={() => {
          updateEmail(userMail);
          userMail?.length > 1 && userMail.includes("@.com") ? (score[6] = true) : (score[6] = false);
          if (score[6] && i == 1) {
            updateIncreaseProgress(10);
            setI(2);
          }
          if (!score[6]) {
            updateDecreaseProgress(10);
            setI(1);
          }

          // score[0] && i==1 ? updateIncreaseProgress(5)  : updateDecreaseProgress(5);
        }}
        name="productName"
        placeholder="Enter a specific product name"
        className="w-3/5 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-[1px] px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};

export default Email;