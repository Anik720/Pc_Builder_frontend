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
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        RAM
      </a>
    ),
    disabled: false,
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Power Supply Unit
      </a>
    ),
    disabled: false,
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Storage Device
      </a>
    ),
    disabled: false,
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Monitor
      </a>
    ),
    disabled: false,
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Others
      </a>
    ),
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
