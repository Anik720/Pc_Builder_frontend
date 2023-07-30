import PcCard from "@/components/shared/Card";
import React from "react";

const AllPc = ({ allPcs }) => {
  return (
    <div className="flex flex-wrap ml-[65px]">
      {allPcs?.map((pc, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <PcCard pc={pc} />
        </div>
      ))}
    </div>
  );
};

export default AllPc;
