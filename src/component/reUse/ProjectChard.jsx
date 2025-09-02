import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "framer-motion";

const ProjectChard = ({
  className = "",
  className2 = "",
  textStyle = "",
  descriptionStyle = "",
  img = {},
  ProjectName = "",
  Description = "",
  Description2 = "",
  Description3="",
  variants,
}) => {
  return (
    <motion.section className={`rounded-xl bg-[#f5f0e3]`} variants={variants}>
      <div
        className={`p-2 ${className} rounded-br-xl rounded-tl-xl rounded-tr-xl`}
      >
        <img
          src={img && img}
          alt="Project pic"
          className="md:h-48 h-44 w-full rounded-md"
        />
        <div className="w-full py-1">
          <p className={`font-bold ${textStyle} md:text-xl text-[15px]`}>
            {ProjectName && ProjectName}
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div
          className={`w-full rounded-br-xl rounded-bl-xl ${className} flex justify-start gap-4 items-center px-2 py-1 `}
        >
          <p className={`${descriptionStyle} md:text-xl text-[15px] `}>
            {Description && Description}
          </p>
          <p className={`${descriptionStyle} md:text-xl text-[15px] `}>
            {Description2}
          </p>
          <p className={`${descriptionStyle} md:text-xl text-[15px] `}>
            {Description3}
          </p>
        </div>
        <div className="rounded-tr-xl rounded-bl-xl rounded-br-xl flex relative ">
          <div className={`h-6 w-6 absolute ${className}`}></div>
          <div className="h-full w-full rounded-full bg-[#f5f0e3] flex justify-center items-center p-2 z-10">
            <RiArrowRightUpLine
              className={`h-6 rounded-full ${className2} p-1`}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectChard;
