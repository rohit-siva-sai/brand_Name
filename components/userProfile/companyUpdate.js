import React from "react";
import CompanyName from "./companyUpdate/companyName";
import BussinessType from "./companyUpdate/bussinessType";
import CompanySize from "./companyUpdate/companySize";
import SellingChannel from "./companyUpdate/sellingChannel";
import AnnualValue from "./companyUpdate/AnnualValue";
import Suppliers from "./companyUpdate/suppliers";
import MarketImport from "./companyUpdate/MarketImport";
import MarketSell from "./companyUpdate/MarketSell";
import PurchasingRole from "./companyUpdate/PurchasingRole";
import PanCardNo from "./companyUpdate/PanCardNo";
import GstNo from "./companyUpdate/GstNo";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Company } from "@/useStore/company";
import { User } from "@/useStore/user";

const CompanyUpdate = ({ getUser }) => {
  const [userId] = User((store) => [store.userId]);
  const [
    company,
    bussinessType,
    companySize,
    sellingChannel,
    annualValue,
    suppliers,
    marketImport,
    marketSell,
    purchasingRole,
    panCardNo,
    gstNo,
  ] = Company((store) => [
    store.company,
    store.bussinessType,
    store.companySize,
    store.sellingChannel,
    store.annualValue,
    store.suppliers,
    store.marketImport,
    store.marketSell,
    store.purchasingRole,
    store.panCardNo,
    store.gstNo,
  ]);
  const updateUser = async (id) => {
    const userDoc = doc(db, "users", id);

    await updateDoc(userDoc, {
      company,
      bussinessType,
      companySize,
      sellingChannel,
      annualValue,
      suppliers,
      marketImport,
      marketSell,
      purchasingRole,
      panCardNo,
      gstNo,
    });
    console.log("updated successfully");
    getUser(id);
  };
  return (
    <div className="relative">
      <div className="py-3 relative px-4 h-[500px] overflow-y-scroll  border-t flex flex-col space-y-2">
        <CompanyName />
        <div className="grid grid-cols-2 gap-x-4">
          <BussinessType />
          <CompanySize />
        </div>
        <SellingChannel />
        <AnnualValue />
        <Suppliers />
        <MarketImport />
        <MarketSell />
        <PurchasingRole />
        <PanCardNo />
        <GstNo />
      </div>
      <div
        className="bg-gray-50 sticky flex justify-center -bottom-5  py-2 "
        onClick={() => {
          updateUser(userId);
        }}
      >
        <div className="bg-rose-500 py-1 px-8 hover:opacity-80 rounded-3xl font-semibold text-white cursor-pointer">
          Save
        </div>
      </div>
    </div>
  );
};

export default CompanyUpdate;
