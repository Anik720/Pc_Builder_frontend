import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

import { Button, Card } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

import intel from "../../../public/images/KaMA6u.jpg";
import monitor from "../../../public/images/monitor.jpg";
import cpu from "../../../public/images/cpu.webp";
import motherboard from "../../../public/images/motherboard.jpg";
import ram from "../../../public/images/ram.jpg";
import { ToastContainer, toast } from "react-toastify";
const PcBuilder = ({}) => {
  const builder = useSelector((state) => state.builder);
  console.log(10, builder);

  const allCPU = builder?.products.filter((item) => item.category === "CPU");
  const allRAM = builder?.products.filter((item) => item.category === "RAM");
  const allMonitor = builder?.products.filter(
    (item) => item.category === "Monitor"
  );
  const allPowerSupply = builder?.products.filter(
    (item) => item.category === "PowerSupply"
  );
  const allStorageDevice = builder?.products.filter(
    (item) => item.category === "StorageDevice"
  );

  const allMotherboard = builder?.products.filter(
    (item) => item.category === "Motherboard"
  );
  const allOthers = builder?.products.filter(
    (item) => item.category === "Others"
  );
  return (
    <div>
      <div>
        <div className="flex flex-col gap-10 m-auto" style={{ width: "70%" }}>
          <Card type="inner" title="CPU" className="bg-gray-600">
            <div
              className="flex justify-between bg-gray-500 p-5 mb-10"
              style={{ borderRadius: "20px" }}
            >
              <div>
                <h1 className="text-xl font-bold" style={{ color: "white" }}>
                  CPU
                </h1>
              </div>
              <div>
                <Link href="/builder/CPU">
                  <Button style={{ color: "white" }}>Choose</Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              {allCPU.length > 0 &&
                allCPU.map((item, index) => (
                  <div className="flex gap-20" key={index}>
                    <div>
                      <Image src={cpu} width={100} height={100} />
                    </div>
                    <div>
                      <h1>{item.productName}</h1>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
          <Card type="inner" title="Motherboard" className="bg-gray-600">
            <div
              className="flex justify-between bg-gray-500 p-5 mb-10"
              style={{ borderRadius: "20px" }}
            >
              <div>
                <h1 className="text-xl font-bold" style={{ color: "white" }}>
                  Motherboard
                </h1>
              </div>
              <div>
                <Link href="/builder/Motherboard/Motherboard">
                  <Button style={{ color: "white" }}>Choose</Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              {allMotherboard?.length ? (
                allMotherboard.map((item, index) => (
                  <div className="flex gap-20" key={index}>
                    <div>
                      <Image src={motherboard} width={100} height={100} />
                    </div>
                    <div>
                      <h1>{item.productName}</h1>
                    </div>
                  </div>
                ))
              ) : (
                <p>No motherboards found.</p>
              )}
            </div>
          </Card>
          <Card type="inner" title="RAM" className="bg-gray-600">
            <div
              className="flex justify-between bg-gray-500 p-5 mb-10"
              style={{ borderRadius: "20px" }}
            >
              <div>
                <h1 className="text-xl font-bold" style={{ color: "white" }}>
                  RAM
                </h1>
              </div>
              <div>
                <Link href="/builder/RAM">
                  <Button style={{ color: "white" }}>Choose</Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              {allRAM?.length ? (
                allRAM.map((item, index) => (
                  <div className="flex gap-20" key={index}>
                    <div>
                      <Image src={ram} width={100} height={100} />
                    </div>
                    <div>
                      <h1>{item.productName}</h1>
                    </div>
                  </div>
                ))
              ) : (
                <p>No RAM found.</p>
              )}
            </div>
          </Card>
          <Card type="inner" title="Monitor" className="bg-gray-600">
            <div
              className="flex justify-between bg-gray-500 p-5 mb-10"
              style={{ borderRadius: "20px" }}
            >
              <div>
                <h1 className="text-xl font-bold" style={{ color: "white" }}>
                  Monitor
                </h1>
              </div>
              <div>
                <Link href="/builder/Monitor">
                  <Button style={{ color: "white" }}>Choose</Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              {allMonitor?.length ? (
                allMonitor.map((item, index) => (
                  <div className="flex gap-20" key={index}>
                    <div>
                      <Image src={monitor} width={100} height={100} />
                    </div>
                    <div>
                      <h1>{item.productName}</h1>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Power Supply found.</p>
              )}
            </div>
          </Card>
          <Card type="inner" title="PowerSupply" className="bg-gray-600">
            <div
              className="flex justify-between bg-gray-500 p-5 mb-10"
              style={{ borderRadius: "20px" }}
            >
              <div>
                <h1 className="text-xl font-bold" style={{ color: "white" }}>
                  Power Supply
                </h1>
              </div>
              <div>
                <Link href="/builder/PowerSupply">
                  <Button style={{ color: "white" }}>Choose</Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              {allPowerSupply?.length ? (
                allPowerSupply.map((item, index) => (
                  <div className="flex gap-20" key={index}>
                    <div>
                      <Image src={intel} width={100} height={100} />
                    </div>
                    <div>
                      <h1>{item.productName}</h1>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Power Supply found.</p>
              )}
            </div>
          </Card>
          <Card type="inner" title="Storage Device" className="bg-gray-600">
            <div
              className="flex justify-between bg-gray-500 p-5 mb-10"
              style={{ borderRadius: "20px" }}
            >
              <div>
                <h1 className="text-xl font-bold" style={{ color: "white" }}>
                  Storage Device
                </h1>
              </div>
              <div>
                <Link href="/builder/StorageDevice">
                  <Button style={{ color: "white" }}>Choose</Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              {allStorageDevice?.length ? (
                allStorageDevice.map((item, index) => (
                  <div className="flex gap-20" key={index}>
                    <div>
                      <Image src={intel} width={100} height={100} />
                    </div>
                    <div>
                      <h1>{item.productName}</h1>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Storage Device Supply found.</p>
              )}
            </div>
          </Card>
          <Card type="inner" title="Others" className="bg-gray-600">
            <div
              className="flex justify-between bg-gray-500 p-5 mb-10"
              style={{ borderRadius: "20px" }}
            >
              <div>
                <h1 className="text-xl font-bold" style={{ color: "white" }}>
                  Others
                </h1>
              </div>
              <div>
                <Link href="/builder/Others">
                  <Button style={{ color: "white" }}>Choose</Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              {allOthers?.length ? (
                allOthers.map((item, index) => (
                  <div className="flex gap-20" key={index}>
                    <div>
                      <Image src={intel} width={100} height={100} />
                    </div>
                    <div>
                      <h1>{item.productName}</h1>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Others item found.</p>
              )}
            </div>
          </Card>
        </div>
      </div>

      <div className="flex justify-end mr-[200px] my-10">
        <Button
          style={{ background: "black", color: "white" }}
          onClick={() => {
            toast("Complted pc Building");
          }}
        >
          Complete Pc Building
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
