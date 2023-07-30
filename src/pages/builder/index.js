import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

import { Button, Card } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

const PcBuilder = ({}) => {
  const builder = useSelector((state) => state.builder);
  console.log(10, builder);

  const allCPU = builder?.products.filter((item) => item.category === "CPU");
  const allMotherboard = builder?.products.filter((item) => item.category === "Motherboard");
  return (
    <div>
      <h1>builder</h1>

      <Card title="Build your pc">
        <Card type="inner" title="CPU">
          <div className="flex justify-between bg-gray-500 p-5 mb-10" style={{borderRadius:"20px"}}>
            <div ><h1 className="text-xl font-bold" >CPU</h1></div>
            <div>
              <Link href="/builder/CPU">
                <Button style={{color:"white"}}>Choose</Button>
              </Link>
            </div>
          </div>

          <div className="flex gap-5 ">
          {allCPU.length &&
            allCPU.map((item, index) => (
              <div className="flex gap-20">
                <div>
                  <img src={item.image} width={100} height={100}/>
                </div>
                <div>
                  <h1 key={index}>{item.productName}</h1>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card type="inner" title="Motherboard">
          <div className="flex justify-between bg-gray-500 p-5 mb-10" style={{borderRadius:"20px"}}>
            <div ><h1 className="text-xl font-bold" >Motherboard</h1></div>
            <div>
              <Link href="/builder/Motherboard/Motherboard">
                <Button style={{color:"white"}}>Choose</Button>
              </Link>
            </div>
          </div>

          <div className="flex gap-5 ">
          {allMotherboard?.length &&
            allMotherboard?.map((item, index) => (
              <div className="flex gap-20">
                <div>
                  <img src={item.image} width={100} height={100}/>
                </div>
                <div>
                  <h1 key={index}>{item.productName}</h1>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card type="inner" title="CPU">
          <div className="flex justify-between bg-gray-500 p-5 mb-10" style={{borderRadius:"20px"}}>
            <div ><h1 className="text-xl font-bold" >CPU</h1></div>
            <div>
              <Link href="/builder/CPU">
                <Button style={{color:"white"}}>Choose</Button>
              </Link>
            </div>
          </div>

          <div className="flex gap-5 ">
          {allCPU.length &&
            allCPU.map((item, index) => (
              <div className="flex gap-20">
                <div>
                  <img src={item.image} width={100} height={100}/>
                </div>
                <div>
                  <h1 key={index}>{item.productName}</h1>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card type="inner" title="CPU">
          <div className="flex justify-between bg-gray-500 p-5 mb-10" style={{borderRadius:"20px"}}>
            <div ><h1 className="text-xl font-bold" >CPU</h1></div>
            <div>
              <Link href="/builder/CPU">
                <Button style={{color:"white"}}>Choose</Button>
              </Link>
            </div>
          </div>

          <div className="flex gap-5 ">
          {allCPU.length &&
            allCPU.map((item, index) => (
              <div className="flex gap-20">
                <div>
                  <img src={item.image} width={100} height={100}/>
                </div>
                <div>
                  <h1 key={index}>{item.productName}</h1>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card type="inner" title="CPU">
          <div className="flex justify-between bg-gray-500 p-5 mb-10" style={{borderRadius:"20px"}}>
            <div ><h1 className="text-xl font-bold" >CPU</h1></div>
            <div>
              <Link href="/builder/CPU">
                <Button style={{color:"white"}}>Choose</Button>
              </Link>
            </div>
          </div>

          <div className="flex gap-5 ">
          {allCPU.length &&
            allCPU.map((item, index) => (
              <div className="flex gap-20">
                <div>
                  <img src={item.image} width={100} height={100}/>
                </div>
                <div>
                  <h1 key={index}>{item.productName}</h1>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card type="inner" title="CPU">
          <div className="flex justify-between bg-gray-500 p-5 mb-10" style={{borderRadius:"20px"}}>
            <div ><h1 className="text-xl font-bold" >CPU</h1></div>
            <div>
              <Link href="/builder/CPU">
                <Button style={{color:"white"}}>Choose</Button>
              </Link>
            </div>
          </div>

          <div className="flex gap-5 ">
          {allCPU.length &&
            allCPU.map((item, index) => (
              <div className="flex gap-20">
                <div>
                  <img src={item.image} width={100} height={100}/>
                </div>
                <div>
                  <h1 key={index}>{item.productName}</h1>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
