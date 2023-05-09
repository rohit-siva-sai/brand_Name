import React, { useEffect, useReducer, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { ImBin } from "react-icons/im";

const AddtocartSidebar = ({
  cart,
  removeFromCart,
  clearCart,
  addToCart,
  key,
  showCart,
  user,
  changeShowLogin
}) => {
  const [brandCart, setBrandCart] = useState({});
  const [show, setShow] = useState(false);
  const [width,setWidth] = useState()
  // console.log(cart, "rohit siva sai");

  useEffect(() => {
    // if (localStorage.getItem("cart")) {
    //   setBrandCart(JSON.parse(localStorage.getItem("cart")));
    // }
    setWidth(window.innerWidth)

  },[width]);

  return (
    <div className={`transition-all duration-500  ${!(width<500) ? "w-1/6 md:block hidden  mr-4   h-[500px] shadow-md sticky top-6 right-0   border rounded-xl":  showCart ? "fixed bg-white z-40 border-2 top-36 rounded-xl right-0": "fixed z-40 -right-72  bg-white"} `}>
      <div className="relative">
        <div>
          <div className="flex py-2 px-4 items-center border-b space-x-3">
            <div className="px-4 py-2 rounded-full font-bold text-lg text-blue-500 bg-blue-200">
              {Object.keys(cart).length}
            </div>
            <p className="font-bold  text-gray-700 ">Products Added</p>
          </div>

          <div className="flex flex-col overscroll-contain pl-2 overflow-y-scroll pb-4 h-[400px] ">
            {Object.keys(cart).length == 0 && (
              <div className="my-auto ">
                <div className="flex flex-col text-sm items-center  text-gray-400 ">
                  <HiShoppingCart className="text-3xl my-2 " />
                  <p>No Products added in the cart.</p>
                  <p>Add products to proceed</p>
                </div>
              </div>
            )}
            {Object.keys(cart).map((item) => {
              return (
                <div className="item items-center  flex my-2">
                  <picture>
                    <img
                      src={
                        cart[item].imgUrl ? cart[item].imgUrl : "/404Image.jpg"
                      }
                      alt=""
                      className="w-12 h-10 rounded-full bg-gray-100 mr-1 "
                    />
                  </picture>
                  <div className="w-2/3 text-sm text-gray-500 font-semibold">
                    {cart[item].title}
                  </div>
                  <div
                    onMouseOver={() => {
                      setShow(true);
                    }}
                    onMouseLeave={() => {
                      setShow(false);
                    }}
                    onClick={() => {
                      removeFromCart(item, 1);
                    }}
                    className="w-1/3 flex cursor-pointer items-center hover:bg-gray-100 py-2 rounded-xl justify-center text-lg"
                  >
                    <ImBin className="text-gray-600" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-t bg-white absolute top-[440px] rounded-xl  w-full py-2">
            <div onClick={()=>{!user && changeShowLogin(true)}} className="text-white rounded-lg cursor-pointer bg-blue-600 px-4 w-fit font-bold mx-auto py-2">
              Ask Quotation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtocartSidebar;
