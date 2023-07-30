import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";
import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import intel from "../../../public/images/KaMA6u.jpg";

const singleProduct = ({ product }) => {
  console.log(14, product);
  return (
    <div>
      <Row style={{ marginTop: "80px", alignItems: "center" }}>
        <Col md={6} lg={12}>
    

          <Image src={intel} width={500} height={300}  alt="Motherboard"/>
        </Col>
        <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
          <h1 style={{ fontSize: "30px" }}>{product.productName}</h1>
          <span
            style={{
              color: "gray",
              display: "block",
              fontSize: "20px",
            }}
          >
            Category: {product.category}
          </span>
          <span
            style={{
              color: "gray",
              display: "block",
              fontSize: "20px",
            }}
          >
            Status: {product.status}
          </span>
          <span
            style={{
              color: "gray",
              display: "block",
              fontSize: "20px",
            }}
          >
            Price: {product.price}
          </span>
          <span
            style={{
              color: "gray",
              display: "block",
              fontSize: "20px",
            }}
          >
            Description: {product.description}
          </span>
          <span
            style={{
              color: "gray",
              display: "block",
              fontSize: "20px",
            }}
          >
            Key Features: {product.key_features}
          </span>
          <span
            style={{
              color: "gray",
              display: "block",
              fontSize: "20px",
            }}
          >
            Ratings: {product.rating}
          </span>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "100%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "gray",
              margin: "10px 0px",
              fontSize: "20px",
            }}
          >
            <span>{/* <CalendarOutlined /> {news?.release_date} */}</span>
            <span>
              {/* <CommentOutlined /> {news?.comment_count} Comments */}
            </span>
            <span>{/* <ProfileOutlined /> {news?.category} */}</span>
          </p>

          <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
            {/* {news?.description} */}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default singleProduct;

singleProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-a9a7.onrender.com/api/v1/PC");
  const allPC = await res.json();

  const paths = allPC?.data?.map((pc) => ({
    params: { productId: pc?._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-a9a7.onrender.com/api/v1/PC/${params.productId}`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data.data,
    },
  };
};
