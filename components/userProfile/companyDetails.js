import { Modal } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import CompanyCard from "./CompanyCard";
import CompanyUpdate from "./companyUpdate";
import { Company } from "@/useStore/company";

const ComapnyDetails = ({ profileUser, getUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [
    updateCompany,
    updateBussinessType,
    updateCompanySize,
    updateSellingChannel,
    updateAnnualValue,
    updateSuppliers,
    updateMarketImport,
    updateMarketSell,
    updatePurchasingRole,
    updatePanCardNo,
    updateGstNo,
    openCompanyModel,
    updateCompanyUpdate,
    updateOpenCompanyModel,
  ] = Company((store) => [
    store.updateCompany,
    store.updateBussinessType,
    store.updateCompanySize,
    store.updateSellingChannel,
    store.updateAnnualValue,
    store.updateSuppliers,
    store.updateMarketImport,
    store.updateMarketSell,
    store.updatePurchasingRole,
    store.updatePanCardNo,
    store.updateGstNo,
    store.openCompanyModel,
    store.updateCompanyUpdate,
    store.updateOpenCompanyModel,
  ]);
  useEffect(() => {
    updateCompany(profileUser.company);
    updateBussinessType(profileUser.bussinessType);
    updateCompanySize(profileUser.companySize);
    updateSellingChannel(profileUser.sellingChannel);
    updateAnnualValue(profileUser.annualValue);
    updateSuppliers(profileUser.suppliers);
    updateMarketImport(profileUser.marketImport);
    updateMarketSell(profileUser.marketSell);
    updatePurchasingRole(profileUser.purchasingRole);
    updatePanCardNo(profileUser.panCardNo);
    updateGstNo(profileUser.gstNo);
  }, [profileUser]);

  return (
    <div className="bg-white rounded-lg pb-8  ">
      <div className="px-6 flex py-4 justify-between items-center">
        <p className="font-medium text-xl text-gray-800">Comapny Info</p>
        <div
          onClick={() => {
            updateCompanyUpdate("all")
            updateOpenCompanyModel(true);
          }}
          className="cursor-pointer"
        >
          <HiPencil size={25} className="hover:text-rose-500" />
        </div>

        <Modal
          title="Edit Company Info"
          centered
          open={openCompanyModel}
          //   onOk={() => setModalOpen(false)}
          footer={null}
          onCancel={() => updateOpenCompanyModel(false)}
          width={600}
        >
          <CompanyUpdate getUser={getUser} />
        </Modal>
      </div>
      <div className="border-t px-6">
        <div className="flex space-x-3 items-center cursor-pointer group">
          <p className="py-3 font-semibold text-base">
            {profileUser.company?.companyName} which is established in{" "}
            {profileUser.company?.year}
          </p>
          <HiPencil
            size={22}
            className="invisible group-hover:visible hover:text-rose-500 "
            onClick={() => {
              updateCompanyUpdate("companyName");
              updateOpenCompanyModel(true);
            }}
          />
        </div>
        <div className="grid grid-cols-2">
          <CompanyCard
          name="bussinessTupe"
            title={"Bussiness Type"}
            value={profileUser.bussinessType}
          />
          <CompanyCard name="companySize" title={"Company Size"} value={profileUser.companySize} />
          <CompanyCard
          name="marketImport"
            title={"Markets you import from"}
            value={profileUser.marketImport}
          />
          <CompanyCard
          name="marketSell"
            title={"Markets you sell to"}
            value={profileUser.marketSell}
          />
          <CompanyCard
          name="sellingChannel"
            title={"Your selling channel"}
            value={profileUser.sellingChannel}
          />
          <CompanyCard
          name="annualValue"
            title={"Annual Sourcing Value (Rupee)"}
            value={profileUser.annualValue}
          />
          <CompanyCard
          name="suppliers"
            title={"Types of suppliers you are looking for"}
            value={profileUser.suppliers}
          />
          <CompanyCard
          name="purchasingRole"
            title={"Your Purchasing Decision Role"}
            value={profileUser.purchasingRole}
          />
          <CompanyCard
          name="panCardNo"
            title={"Pan Card Number"}
            value={profileUser.panCardNo}
          />
          <CompanyCard name="gstNo" title={"GST Number"} value={profileUser.gstNo} />
        </div>
      </div>
    </div>
  );
};

export default ComapnyDetails;
