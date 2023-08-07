import { sendContactForm } from "@/lib/api";
import React, { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { BiLoaderCircle } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initValues = { name: "", email: "", subject: "", phone: "", message: "" };

const initstate = {
  isLoading: false,
  error: "",
  mainEmail: "",
  values: initValues,
};

const EmailSender = ({ companyName, showEnquiry, companyEmail, brandUser }) => {
  const [state, setState] = useState(initstate);
  const [mainEmail, setMainEmail] = useState(companyEmail);
  const [showContact, setShowContact] = useState(false);
  // console.log("branduser", brandUser);

  // const [companyName, setCompanyName] = useState("");
  // const [showEnquiry, setShowEnquiry] = useState();
  // const [companyEmail, setCompanyEmail] = useState("");

  // const handleShow=(companyName, companyEmail)=>{
  //   setCompanyName(companyName);
  //   setShowEnquiry(!showEnquiry);
  //   setCompanyEmail(companyEmail);
  // }

  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      mainEmail: companyEmail,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  useEffect(() => {
    setShowContact(showEnquiry);
    const { values } = initstate;
    values.name = brandUser?.username;
    values.email = brandUser?.email;
    values.phone = brandUser?.phone_number;
    // console.log("gsvahgdvshgd", values);
  }, [showEnquiry]);

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      const arr = await sendContactForm(state);
      console.log('assassa',arr);
      
      setState(initstate);
      toast.success(`Email Has been sent successfully`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error, "rohit");

      setState((prev) => ({
        ...prev,
        mainEmail: companyEmail,
        isLoading: false,
        error: error.message,
      }));

      toast.error(`Failed to sent Email`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className={`fixed top-0 z-50 w-1/4 transition-all duration-300 h-full    border bg-white ${
          showContact ? " right-0 " : "-right-96"
        } `}
      >
        <div className="py-2 tracking-wide flex justify-between space-x-6 bg-blue-500 text-white font-bold items-center  px-6 text-lg ">
          <p className="truncate"> Contact Supplier {companyName}</p>
          <div
            onClick={() => {
              setShowContact(false);
            }}
            className="cursor-pointer"
          >
            <GiCrossMark />
          </div>
        </div>
        <div>{error}</div>
        <div className="px-4 py-4  ">
          <div>
            <picture>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_P5X6aWUc52_1_8h5YIsw1bnzE9fRB6k1q00KELUtDhM05KLxAVOhzhKOV9SCN7_3kE&usqp=CAU"
                alt=""
                className="w-36 h-16"
              />
            </picture>
          </div>
          <p className="text-gray-600 font-semibold text-xs pt-3 ">
            Send an Enquiry to ouer company to know more information about the
            products
          </p>
        </div>
        <div className="px-4 py-4 bg-gray-100 flex flex-col space-y-3">
          {/* <form action=""> */}
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="" className="text-sm text-gray-600 font-semibold">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              id=""
              value={values.email}
              onChange={handleChange}
              className="border-2 rounded p-1 outline-none px-2"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-sm text-gray-600 font-semibold">
              Name <span className="text-red-600">*</span>
            </label>

            <input
              type="text"
              name="name"
              id=""
              value={values.name}
              onChange={handleChange}
              className="border-2 rounded p-1 outline-none px-2 "
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-sm text-gray-600 font-semibold">
              Reason for Enquiry <span className="text-red-600">*</span>
            </label>
            {/* <input
              type="text"
              name="subject"
              id=""
              value={values.subject}
              onChange={handleChange}
              className="border-2"
            /> */}
            <select
              name="subject"
              id=""
              value={values.subject}
              onChange={handleChange}
              className="border-2 rounded p-1 outline-none px-2 "
            >
              <option value="" disabled>
                {" "}
                --please select--{" "}
              </option>
              <option value="enqury 1">enquiry 1</option>
              <option value="enqury 2">enquiry 2</option>
              <option value="enqury 3">enquiry 3</option>
              <option value="enqury 4">enquiry 4</option>
              <option value="enqury 5">enquiry 5</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-sm text-gray-600 font-semibold">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="phone"
              id=""
              value={values.phone}
              onChange={handleChange}
              className="border-2 rounded p-1 outline-none px-2 "
            />
          </div>
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="" className="text-sm text-gray-600 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id=""
              rows={3}
              value={values.message}
              onChange={handleChange}
              className="border-2 rounded p-1 outline-none px-2 "
            />
          </div>
          <button
            className="p-2 disabled:cursor-auto hover:opacity-75 rounded-md bg-gray-200 disabled:opacity-50 border-2 font-bold  cursor-pointer space-x-4 items-center  text-center w-full flex justify-center"
            disabled={
              !values.name ||
              !values.subject ||
              !values.email ||
              !values.message
            }
            isLoading={isLoading}
            onClick={onSubmit}
          >
            {isLoading && (
              <div className="animate-spin">
                <BiLoaderCircle className="text-3xl text-blue-500" />
              </div>
            )}
            <p>Submit</p>
          </button>
          <p className="text-[10px] px-2 mr-16">
            We've only use your personal information as explained in our
            <span className="text-blue-600 "> Privacy Statement</span>
          </p>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default EmailSender;
