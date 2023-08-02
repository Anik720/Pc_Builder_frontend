import React, { Fragment } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setBuildProducts } from "@/redux/features/builder/builderSlice";
import Image from "next/image";
import intel from "../../../public/images/KaMA6u.jpg";
const { Meta } = Card;
const PcCard = ({ pc, key }) => {
  const dispatch = useDispatch();

  return (
    <Card
      className="bg-gray-200 "
      style={{
        width: 300,
      }}
      cover={
        <Image
          src={intel}
          alt="Motherboard"
          width={300} // Set the width of the image
          height={300} // Set the height of the image
        />
      }
      actions={[
        <Fragment key="setting">
          {" "}
          {/* Use Fragment and provide a unique key */}
          <SettingOutlined />
        </Fragment>,

        <Fragment key="details">
          {" "}
          {/* Use Fragment and provide a unique key */}
          <Link href={`/product/${pc._id}`}>
            <Button>Details</Button>
          </Link>
        </Fragment>,

        <Fragment key="add-to-builder">
          {" "}
          {/* Use Fragment and provide a unique key */}
          <Button onClick={() => dispatch(setBuildProducts(pc))}>
            Add to builder
          </Button>
        </Fragment>,
      ]}
    >
      <Meta
        avatar={<Avatar src={pc.image} />}
        title={`Product Name: ${pc.productName}`}
        description={`Category: ${pc.category}`}
      />
      <div
        className="m-5 bg-gray-800 p-10"
        style={{ color: "#fff", borderRadius: "10px" }}
      >
        <p className="font-bold">Price: ${pc.price}</p>
        <p>Status: ${pc.status}</p>
        <p>Rating: ${pc.rating}</p>
      </div>
    </Card>
  );
};
export default PcCard;
