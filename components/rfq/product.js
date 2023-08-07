import Link from "next/link";
import React from "react";
import RfqSteps from "./rfqSteps";
import { useState } from "react";
import { useStore } from "@/useStore/details";
import { useEffect } from "react";
import Category from "./category";
import Attribute from "./attribute";
import About from "./about";
import Source from "./sourcing";
import Order from "./order";
import UnitPrice from "./unitPrice";
import ValidTo from "./validTo";
import Email from "./email";
import Require from "./requirements/require";
import ProductName from "./productName";
import Sourcing from "./sourcing";
import { Checkbox } from "antd";

const Product = () => {
  const [updateIncreaseProgress, updateDecreaseProgress, productName, score] =
    useStore((store) => [
      store.updateIncreaseProgress,
      store.updateDecreaseProgress,
      store.productName,
      store.score,
    ]);
  const [proName, setProName] = useState(productName);
  const [checked, setChecked] = useState(false);
  const [i, setI] = useState(1);
  // console.log("require", requirements);

  const func = () => {
    score.map((item) => {
      return item ? updateIncreaseProgress(5) : updateDecreaseProgress(5);
    });
  };

  return (
    <div className="">
      <div className="border">
        <p className="text-3xl font-semibold text-gray-800">
          Request for Quotations- RFQ
        </p>
        <RfqSteps />
        <div className="px-4 flex flex-col space-y-6">
          <ProductName />
          <Category />
          <Attribute />
          <About />
          <Sourcing />
          <div className="flex space-x-8">
            <Order />
            <UnitPrice />
          </div>
          <ValidTo />
          <Require />
          <Email />
          <div>
            <Checkbox
              className="text-gray-600 "
              onChange={(e) => {
                setChecked(e.target.checked);
                console.log("ssds", checked);
              }}
            >
              &nbsp;I'd like to send this RFQ to more suppliers, if I have not
              received 20 quotations within the next 48 hours.
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
