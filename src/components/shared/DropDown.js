import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items = [
  {
    key: "1",
    label: <Link href="/builder/CPU">CPU / Processor</Link>,
  },
  {
    key: "2",
    label: <Link href="/builder/Motherboard/Motherboard">MotherBoard</Link>,
  },
  {
    key: "3",
    label: <Link href="/builder/RAM">RAM</Link>,
    disabled: false,
  },
  {
    key: "4",
    label: <Link href="/builder/PowerSupply">Power Supply Unit</Link>,
    disabled: false,
  },
  {
    key: "5",
    label: <Link href="/builder/StorageDevice">Storage Device</Link>,
    disabled: false,
  },
  {
    key: "6",
    label: <Link href="/builder/Monitor">Monitor</Link>,
    disabled: false,
  },
  {
    key: "7",
    label: <Link href="/builder/Others">Others</Link>,
    disabled: false,
  },
];
const DropDown = ({ name }) => (

  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {name}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropDown;
