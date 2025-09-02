import React from "react";
import { RiStarFill, RiMoonCloudyLine } from "@remixicon/react";

const Chard = () => {
  return (
    <section className=" rounded-xl p-2 bg-[#874FD4] relative">
      <div className="absolute top-0 right-2">
        <RiStarFill className="h-20 w-20 -z-20 text-[#a371e9]" />
      </div>
      <div className="flex flex-col justify-center text-white relative">
        <div className="z-10">
          <div className="flex justify-start items-center text-4xl">
            <h1>JS</h1>
          </div>
          <p className="text-2xl">
            Automation
            <br />
            <span>Testing Workshop</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chard;
