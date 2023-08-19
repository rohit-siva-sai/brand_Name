import { useLoans, useStore } from "@/useStore/store";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

const PrimaryEmail = ({ user }) => {
  const [
    updateIncreaseProgress,
    updateDecreaseProgress,
    updateUserEmail,
    userEmail,
  ] = useLoans((store) => [
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.updateUserEmail,
    store.userEmail,
  ]);

  const [
    loanType,
    dob,
    loan,
    income,
    name,
    address,

    phno,
    userId,

    userDetails,
    updateUserDetails,
    updateProgress,
  ] = useLoans((store) => [
    store.loanType,
    store.dob,
    store.loan,
    store.totalIncome,
    store.username,
    store.userAddress,

    store.phoneNumber,
    store.userId,

    store.userDetails,
    store.updateUserDetails,
    store.updateProgress,
  ]);

  const [email, setEmail] = useState(userEmail);
  const [accept, setAccept] = useState(false);
  // console.log(address, dob, loan, phno, income, email, name,user.uid);

  const submitLoan = async (id) => {
    // console.log("rohit sivas ai");

    // const value = await getUser(id)
    // console.log("value", value);

    try {
      await setDoc(doc(db, "loans",id), {
        address: address,
        dateofBirth: dob,
        loan: loan,
        phoneNumber: phno,
        totalIncome: income,
        userEmail: email,
        userId: id,
        username: name,

        // id: auth?.currentUser?.uid,
        // id: "GCiTcEWLwbOBNj2n5JEmivzN8A62",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute top-[53%]   -translate-x-[50%] -translate-y-[50%] left-[50%]">
      <div className="">
        <p className="text-4xl font-bold text-[#113b5e]">
          What&#39;s your email?
        </p>
        <p className="text-lg pt-4 pb-8  text-gray-700">
          You&#39;ll use this to receive details about your loan and create your
          account.
        </p>
        <div>
          <p className="font-semibold pb-1 text-lg ">Email</p>
          <div className="">
            <input
              type="email"
              placeholder="your@gmail.com"
              name="email"
              id=""
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // updateLoan(loan);
              }}
              onBlur={() => {
                updateUserEmail(email);
              }}
              // onChange={handleChange}
              className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4"
            />
          </div>
        </div>

        <p className="text-start font-semibold w-[600px] text-lg pt-6 text-cyan-800 ">
          By checking this box, I represent and acknowledge that I have clicked
          on, read and agree to:
        </p>
        <div className="flex w-[600px]  space-x-4 items-start  pt-6">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-10 h-10  cursor-pointer border accent-sky-600"
            onClick={() => {
              setAccept(!accept);
            }}
          />
          <p className="text-lg ">
            The{" "}
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              ESIGN Act Consent
            </Link>
            ,&nbsp;
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              Terms Of Use
            </Link>
            ,&nbsp;
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              Application Terms and Conditions
            </Link>
            ,&nbsp;
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              Privacy Policy
            </Link>
            &nbsp;and&nbsp;
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              Credit Profile Authorization
            </Link>
            .
          </p>
        </div>

        <div className="flex justify-center pt-14 items-center space-x-4 ">
          <Link href={"/primaryAddress"} onClick={updateDecreaseProgress}>
            <div className="hover:bg-gray-100 bg-white py-3 pl-4 pr-2 shadow-md  flex justify-center">
              <MdArrowBackIos size={24} className="text-sky-600" />
            </div>
          </Link>

          <div
            onClick={()=>{submitLoan(user.uid)}}
            className="w-56 font-semibold  bg-sky-600 cursor-pointer text-lg hover:bg-[#114671] mx-auto text-white text-center py-3"
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryEmail;
