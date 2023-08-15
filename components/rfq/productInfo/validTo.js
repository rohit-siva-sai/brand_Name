import { useStore } from "@/useStore/details";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const ValidTo = () => {
  const [
    updateValidTo,
    updateIncreaseProgress,
    updateDecreaseProgress,
    validTo,
    scoreProduct,
  ] = useStore((store) => [
    store.updateValidTo,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.validTo,
    store.scoreProduct,
  ]);
  const date = new Date();
  const [a, setA] = useState(date.getDate());
  const [b, setB] = useState(date.getMonth());
  const [c, setC] = useState(date.getFullYear());

  const [validDays, setValidDays] = useState(7);
  const [newDate, setNewDate] = useState("");
  const [i, setI] = useState(1);
  const dateFormat = "DD/MM/YYYY";
  const [day, setDay] = useState(
    `${a + validDays < 10 ? "0" : ""}${a + validDays}/0${b}/${c}`
  );
  //   const day = ;
  // day.toString();
  console.log("day", day);

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };
  return (
    <div className="flex flex-col space-y-1">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Valid To<span className="text-red-600 text-lg">*</span>
      </label>
      <div className="flex items-center space-x-3">
        <DatePicker
          defaultValue={dayjs(day, dateFormat)}
          format={dateFormat}
          onChange={(date, dateString) => {
            setNewDate(date);
            console.log("dsdssd", newDate?.$D);
            console.log("dsdssd", newDate?.$M);
            console.log("dsdssd", newDate?.$y);
            console.log("bakj", newDate);
            setA(newDate?.$D);
            setB(newDate?.$M);
            setC(newDate?.$y);
            setDay();
          }}
          onBlur={() => {
            updateValidTo(validDays);
            newDate != null
              ? (scoreProduct[7].score = true)
              : (scoreProduct[7].score = false);
            if (scoreProduct[7].score && i == 1) {
              updateIncreaseProgress(2);
              setI(2);
            }
            if (!scoreProduct[7].score) {
              updateDecreaseProgress(2);
              setI(1);
            }
          }}
          className="w-40"
        />
        <p className="font-semibold text-gray-600">{validDays} days</p>
      </div>
    </div>
  );
};

export default ValidTo;
