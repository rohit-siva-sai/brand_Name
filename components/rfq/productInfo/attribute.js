import React from "react";
import { Cascader, Select } from "antd";
import { useStore } from "@/useStore/details";
import { useState } from "react";
const { SHOW_CHILD } = Cascader;

const application = [
  {
    label: "Building",
    value: "Building",
  },
  {
    label: "Fencing",
    value: "Fencing",
  },
  {
    label: "Construction",
    value: "Construction",
  },
  {
    label: "Manfacturing",
    value: "Manfacturing",
  },
  {
    label: "Rope",
    value: "Rope",
  },
];
const service = [
  {
    label: "Bending",
    value: "Bending",
  },
  {
    label: "Binding",
    value: "Binding",
  },
  {
    label: "Cutting",
    value: "Cutting",
  },
  {
    label: "Decoiling",
    value: "Decoiling",
  },
  {
    label: "Punching",
    value: "Punching",
  },
  {
    label: "Welding",
    value: "Welding",
  },
];
const surface = [
  {
    label: "Intended",
    value: "Intended",
  },
  {
    label: "Smooth",
    value: "Smooth",
  },
  {
    label: "Spiral",
    value: "Spiral",
  },
];
const technic = [
  {
    label: "Copper Clad",
    value: "Copper Clad",
  },
  {
    label: "Copper coated",
    value: "Copper coated",
  },
  {
    label: "Drawn wire",
    value: "Drawn wire",
  },
];

const Attribute = () => {
  const [attributes, updateAttributes] = useStore((store) => [
    store.attributes,
    store.updateAttributes,
  ]);
  const [values, setValues] = useState(attributes);
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <div className="flex flex-col space-y-1">
      <label className="leading-7 text-base font-semibold text-gray-800">
        Further Specified Attribute (s)
      </label>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        <Select
          style={{
            width: "100%",
          }}
          mode="multiple"
          allowClear
          className="font-semibold"
          placeholder="Application"
          maxTagCount="responsive"
          // defaultValue={application}
          onChange={(value) => {
            setValues((prev) => ({ ...prev, application: value }));
          }}
          onBlur={() => {
            updateAttributes(values);
          }}
          options={application}
        />
        <Select
          style={{
            width: "100%",
          }}
          mode="multiple"
          allowClear
          className="font-semibold"
          placeholder="Processing Service"
          maxTagCount="responsive"
          // defaultValue={application}
          onChange={(value) => {
            setValues((prev) => ({ ...prev, service: value }));
          }}
          onBlur={() => {
            updateAttributes(values);
          }}
          options={service}
        />
        <Select
          style={{
            width: "100%",
          }}
          mode="multiple"
          allowClear
          className="font-semibold"
          placeholder="Surface"
          maxTagCount="responsive"
          // defaultValue={application}
          onChange={(value) => {
            setValues((prev) => ({ ...prev, surface: value }));
          }}
          onBlur={() => {
            updateAttributes(values);
          }}
          options={surface}
        />
        <Select
          style={{
            width: "100%",
          }}
          mode="multiple"
          allowClear
          className="font-semibold"
          placeholder="Technic"
          maxTagCount="responsive"
          // defaultValue={application}
          onChange={(value) => {
            setValues((prev) => ({ ...prev, technic: value }));
          }}
          onBlur={() => {
            updateAttributes(values);
          }}
          options={technic}
        />
        {/* <Cascader
          style={{
            width: "100%",
          }}
          placeholder="Processing Service"
          className="font-semibold"
          options={application}
          onChange={(value) => {
            setValues((prev) => ({ ...prev, application: value }));
          }}
          onBlur={() => {
            updateAttributes(values);
          }}
          multiple
          maxTagCount="responsive"
          showCheckedStrategy={SHOW_CHILD}
        />

        <Cascader
          style={{
            width: "100%",
          }}
          placeholder="Processing Service"
          className="font-semibold"
          options={service}
          onChange={(value) => {
            setValues((prev) => ({ ...prev, service: value }));
          }}
          onBlur={() => {
            updateAttributes(values);
          }}
          multiple
          maxTagCount="responsive"
          showCheckedStrategy={SHOW_CHILD}
        />
        <Cascader
          style={{
            width: "100%",
          }}
          placeholder="Surface"
          className="font-semibold"
          options={surface}
          onChange={(value) => {
            setValues((prev) => ({ ...prev, surface: value }));
          }}
          onBlur={() => {
            updateAttributes(values);
          }}
          multiple
          maxTagCount="responsive"
          showCheckedStrategy={SHOW_CHILD}
        />
        <Cascader
          style={{
            width: "100%",
          }}
          placeholder="Technic"
          className="font-semibold"
          options={technic}
          onChange={(value) => {
            setValues((prev) => ({ ...prev, technic: value }));
          }}
          onBlur={() => {
            updateAttributes(values);
          }}
          multiple
          maxTagCount="responsive"
          showCheckedStrategy={SHOW_CHILD}
        /> */}
      </div>
    </div>
  );
};

export default Attribute;
