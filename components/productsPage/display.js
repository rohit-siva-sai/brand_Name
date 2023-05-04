import Image from "next/image";
import React, { useEffect, useState } from "react";

const Display = ({
  id,
  title,
  imgUrl,
  addToCart,
  cart,
  key,
  removeFromCart,
  adding
}) => {
 
  
  const [added, setAdded] = useState(false);
  const [brandCart, setBrandCart] = useState(cart);
  const [keyItem,setKeyItem]  = useState(0)

  const getCart = ()=>{
    if (localStorage.getItem("cart")) {
      setBrandCart(JSON.parse(localStorage.getItem("cart")));
      
    }
  }

  useEffect(() => {
    getCart()
    if (id in brandCart) {
      setAdded(true);
    } else {
      setAdded(false);
    }
    
    
  }, [key,cart]);

  return (
    <div className="border relative shadow-md rounded-2xl z-20 md:z-40 bg-white ">
      <div className="flex flex-col items-center p-4 space-y-3 ">
        <picture className=" cursor-pointer transition-all   duration-500 hover:translate-y-2 ease-in-out hover:scale-y-125 scroll-smooth ">
          <img
            src={`${imgUrl ? imgUrl : "/404Image.jpg"}`}
            alt=""
            className="w-40 rounded-lg bg-gray-100  h-16"
          />
        </picture>
        <p className="font-semibold first-letter:uppercase text-gray-700">
          {title}
        </p>
        {!adding && (
          <div
            onClick={() => {
              addToCart(id, 1, title, imgUrl);
            }}
            className="px-2 py-1 border-2 rounded-md w-full font-semibold text-center border-blue-500 cursor-pointer text-blue-500 hover:bg-blue-100/50"
          >
            Add to Cart
          </div>
        )}
        {adding && (
          <div
            onClick={() => {
              removeFromCart(id, 1);
            }}
            className="px-2 py-1 text-xs border-2 rounded-md w-full font-semibold text-center border-red-500 cursor-pointer text-red-500 hover:bg-red-100/50"
          >
            Remove from Cart
          </div>
        )}
      </div>

      {adding && (
        <div className="px-2 absolute  animate-pulse -top-2 left-0 bg-green-600 text-white font-bold py-0 rounded-xl text-sm">
          Added
        </div>
      )}
    </div>
  );
};

export default Display;
