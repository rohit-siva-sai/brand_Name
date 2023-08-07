import Product from "@/components/rfq/product";
import Score from "@/components/rfq/score";
import { db } from "@/config/firebase";
import { useStore } from "@/useStore/details";
import { collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";

const Rfq = () => {
  const [
    productName,
    productCategory,
    attributes,
    aboutProduct,
    sourcingType,
    order,
    unitPrice,
    validTo,
    requirements,
    email,
  ] = useStore((store) => [
    store.productName,
    store.productCategory,
    store.attributes,
    store.aboutProduct,
    store.sourcingType,
    store.order,
    store.unitPrice,
    store.validTo,
    store.requirements,
    store.email,
  ]);

  const rfqCollection = collection(db, "rfqs");
//  console.log('product category',attributes);
 
 
  const submitNewUser = async () => {
  
  
    try {
      await setDoc(doc(rfqCollection), {
        productName: productName,
        productCategory: productCategory,
        attributes: attributes,
        aboutProduct: aboutProduct,
        sourcingType: sourcingType,
        order: order,
        unitPrice: unitPrice,
        validTo: validTo,
        requirements: requirements,
        email: email
      });
    } catch (err) {
      console.log(err);
    }
  };
  // console.log('ass',productCategory);

  return (
    <div className="bg-gray-50 py-12 ">
      <div className="grid grid-cols-12 gap-x-7 border px-36">
        <div className="col-span-9 bg-white px-8 py-6 rounded-lg border">
          <Product />
          <div onClick={submitNewUser} className="mx-4 cursor-pointer mt-5 text-base w-fit font-semibold px-7 rounded-md text-white bg-gradient-to-l from-blue-400  to-blue-600 py-2">
            Submit
          </div>
        </div>
        <div className="border bg-white col-span-3">
          <Score />
        </div>
      </div>
    </div>
  );
};

export default Rfq;
