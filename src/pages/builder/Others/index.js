import RootLayout from "@/components/layouts/RootLayout";
import PcCard from "@/components/shared/Card";
import React from "react";

const Others = ({ product }) => {

  return (
    <div>
      <h1 className="text-xl text-center font-bold mb-20">Category Others</h1>
      <div className="flex gap-5 flex-wrap">
        {product.map((item,index) => (
          <PcCard key={index} pc={item} ></PcCard>
        ))}
      </div>
    </div>
  );
};

export default Others;

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://pc-builder-a9a7.onrender.com/api/v1/PC?category=Others`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data.data,
    },
  };
};
