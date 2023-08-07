import { useStore } from "@/useStore/details";
import { Select } from "antd";
import React from "react";
import { useState } from "react";

const UnitPrice = () => {
  const [
    updateUnitPrice,

    updateIncreaseProgress,
    updateDecreaseProgress,
    unitPrice,
   scoreProduct
  ] = useStore((store) => [
    store.updateUnitPrice,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.unitPrice,
    store.scoreProduct,
   
  ]);
  const [i, setI] = useState(1);

  const [unitChange, setUnitChange] = useState(unitPrice);

  return (
    <div className="flex flex-col space-y-1">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Preferred Unit Price
      </label>
      <div className="flex space-x-3">
        <Select
          showSearch
          className="w-40"
          // style={{
          //   width: 200,
          // }}
          defaultValue={"USD"}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          onChange={(value) => {
            setUnitChange((prev) => ({ ...prev, unitType: value }));
          }}
          onBlur={() => {
            updateUnitPrice(unitChange);
          }}
          options={[
            {
              value: "CHF",
              label: "CHF",
            },
            {
              value: "EUR",
              label: "EUR",
            },
            {
              value: "GBP",
              label: "GBP",
            },
            {
              value: "HKD",
              label: "HKD",
            },
            {
              value: "JPY",
              label: "JPY",
            },
            {
              value: "NTD",
              label: "NTD",
            },
            {
              value: "NZT",
              label: "NZT",
            },
            {
              value: "RMB",
              label: "RMB",
            },
            {
              value: "SGD",
              label: "SGD",
            },
            {
              value: "USD",
              label: "USD",
            },
          ]}
        />
        <input
          type="number"
          value={unitChange.units}
          id="aboutProduct"
          onChange={(e) => {
            setUnitChange((prev) => ({ ...prev, units: e.target.value }));
          }}
          onBlur={() => {
            updateUnitPrice(unitChange);
            unitChange.units != 0 ? (scoreProduct[6].score = true) : (scoreProduct[6].score = false);
            if (scoreProduct[6].score && i == 1) {
              updateIncreaseProgress(4);
              setI(2);
            }
            if (!scoreProduct[6].score) {
              updateDecreaseProgress(4);
              setI(1);
            }

            // score[0] && i==1 ? updateIncreaseProgress(5)  : updateDecreaseProgress(5);
          }}
          name="units"
          placeholder="eg: 50"
          className="w-40 bg-white placeholder:leading-6  rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-[1px] px-2 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default UnitPrice;
