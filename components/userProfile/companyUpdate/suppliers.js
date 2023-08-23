import { Company } from '@/useStore/company';
import { Select } from 'antd';
import React from 'react'
import { useState } from 'react';

const Suppliers = () => {
  const [suppliers, updateSuppliers] = Company((store) => [
    store.suppliers,
    store.updateSuppliers,
  ]);
  const [supply, setSupply] = useState(suppliers);
  return (
    <div className="flex flex-col space-y-1 ">
      <label className="leading-7 text-sm font-semibold text-gray-800">
      Types of suppliers you are looking for<span className="text-red-600 text-lg">*</span>
      </label>
      <Select
        // defaultValue="Bussiness Service"
        mode='multiple'
        allowClear
        maxTagCount="responsive"
        value={supply}
        placeholder="Select One"
        className="w-full md:w-full text-sm font-semibold"
        onChange={(value) => {
          setSupply(value);
        }}
        onBlur={() => {
          updateSuppliers(supply);
        }}
        options={[
          {
            value: "Distributor",
            label: "Distributor",
          },
          {
            value: "OBM (brand development)",
            label: "OBM (brand development)",
          },
          {
            value: "ODM (R&D)",
            label: "ODM (R&D)",
          },
          {
            value: "OEM (customized product)",
            label: "OEM (customized product)",
          },
          {
            value: "Not Applicable",
            label: "Not Applicable",
          },
         
         
        ]}
      />
      
    </div>
  );
}

export default Suppliers
