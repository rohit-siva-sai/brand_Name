import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { FaTag, FaRegUserCircle } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Login from "./login";

const Navbar = ({
  filterSearch,
  handleShowCart,
  handleUser,
  user,
  submitNewUser,
  getPhoneNumber,
  changeShowLogin,
  showLogin
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [showSideCart, setShowSidecart] = useState(false);
  const router = useRouter();

  const [searchShow, setSearchShow] = useState(true);

 

  useEffect(() => {
    let exempted = ["/"];
    if (exempted.includes(router.pathname)) {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  }, [router]);
  return (
    <>
      {showLogin && (
        <Login
          changeShowLogin={changeShowLogin}
          handleUser={handleUser}
          user={user}
          submitNewUser={submitNewUser}
          getPhoneNumber={getPhoneNumber}
        />
      )}
      <div
        className="sticky top-0 py-2 shadow-md
     z-40 bg-white "
      >
        <div className="flex items-center px-2  justify-between">
          <Link href={"/"}>
            <div className="flex items-center space-x-4 ">
              <picture>
                <img src="/404Image.jpg" alt="" className="w-12 h-12" />
              </picture>
              <p className="font-bold text-lg text-blue-500">brand_name</p>
            </div>
          </Link>

          <div className="flex space-x-16">
            <button
              className={`  ${
                searchShow ? "md:flex hidden" : "hidden"
              } border rounded-md items-center`}
            >
              <input
                type="search"
                placeholder="Search Product, Category, Brand ..."
                name=""
                id=""
                onChange={(e) => {
                  filterSearch(e.target.value);
                }}
                className={`w-[600px] py-2 px-2 focus:border-2 focus:border-blue-500  rounded-md ${styles.searchBar} outline-none`}
              />
              <AiOutlineSearch className="text-4xl cursor-pointer h-full px-2 hover:bg-blue-100 text-blue-500 " />
            </button>
            <div className="flex space-x-3">
              {/* <Link href="/brandStore">
                <div className="flex items-center md:px-8 rounded-md py-2  px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2">
                  <FaTag className="text-white text-xl " />
                  <p className="text-white font-semibold md:block hidden  ">
                    Brand Store
                  </p>
                </div>
              </Link> */}
             
              <Link href={"/rfq"}>
              <div
                onClick={handleShowCart}
                className="flex items-center md:px-8 rounded-md py-2 px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2"
              >
                <HiShoppingCart className="text-white text-2xl " />
                <p className="text-white font-semibold md:block hidden  ">
                  Get RFQ
                </p>
              </div>
              </Link>
              <div
                onClick={() => {
                  !user && changeShowLogin(true);
                  user && router.push("/myRfq");
                }}
                className="flex items-center md:px-8 rounded-md py-2 px-2 cursor-pointer hover:bg-blue-500 bg-blue-600  space-x-2"
              >
                <FaRegUserCircle className="text-white text-2xl " />
                {user ? (
                  <p className="text-white font-semibold md:block hidden ">
                    Welcome,User
                  </p>
                ) : (
                  <p className="text-white font-semibold md:block hidden ">
                    Login
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          className={` ${
            searchShow ? "flex md:hidden" : "hidden"
          } w-11/12 mx-auto  my-2  md:hidden  border rounded-md items-center`}
        >
          <input
            type="search"
            placeholder="Search Product, Category, Brand ..."
            name=""
            id=""
            onChange={(e) => {
              filterSearch(e.target.value);
            }}
            className={`w-full py-2 px-2 focus:border-2 focus:border-blue-500  rounded-md ${styles.searchBar} outline-none`}
          />
          <AiOutlineSearch className="text-4xl cursor-pointer py-2 px-2 hover:bg-blue-100 text-blue-500 " />
        </button>
      </div>
    </>
  );
};

export default Navbar;
