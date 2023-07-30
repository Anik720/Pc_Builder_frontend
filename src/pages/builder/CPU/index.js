import RootLayout from "@/components/layouts/RootLayout";
import PcCard from "@/components/shared/Card";
import { useRouter } from "next/router";
import React from "react";

const Cpu = ({ product }) => {
  return (
    <div>
      <h1 className="text-xl text-center font-bold mb-20">Category CPU</h1>
      <div className="flex gap-5 flex-wrap">
        {product.map((item,index) => (
          <PcCard key={index} pc={item} ></PcCard>
        ))}
      </div>
    </div>
  );
};

export default Cpu;
Cpu.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async (context) => {
  const res = await fetch(`https://pc-builder-a9a7.onrender.com/api/v1/PC?category=CPU`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data.data,
    },
  };
};
