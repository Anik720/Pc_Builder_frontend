import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

import { Button, Card } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";

const PcBuilder = ({}) => {
  const builder = useSelector((state) => state.builder);
  console.log(10, builder);

  const allCPU = builder?.products.filter((item) => item.category === "CPU");
  return (
    <div>
      <h1>builder</h1>

      <Card title="Card title">
        <Card
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          <div className="flex justify-around">
            <div>CPU</div>
            <div>
              <Link href="/builder/CPU">
                <Button>Choose</Button>
              </Link>
            </div>
          </div>

          {allCPU.length && allCPU.map((item,index) => <h1 key={index}>{item.productName}</h1>)}
        </Card>
        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          Inner Card content
        </Card>
      </Card>
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
