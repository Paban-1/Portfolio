import React from "react";
import { RiArrowRightUpLine, RiArrowRightLine, RiRocket2Fill, RiStarFill } from "@remixicon/react";
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
  Description3 = "",
  variants,
  link,
}) => {
  return (
    <motion.a
      className={`rounded-xl bg-[#f5f0e3] overflow-hidden`}
      variants={variants}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`p-2 ${className} rounded-br-xl rounded-tl-xl rounded-tr-xl object-cover`}
      >
        <div className="overflow-hidden rounded-md">
          <img
            src={img && img}
            alt="Project pic"
            className="md:h-48 h-44 w-full rounded-md hover:scale-105 duration-300"
          />
        </div>
        <div className="w-full py-1">
          <p
            className={`${textStyle} md:text-[18px] text-[15px] tracking-wide flex items-center gap-2`}
            style={{ fontFamily: "monospace" }}
          >
            <RiRocket2Fill className=" hover:scale-75 duration-200"/>
            {ProjectName && ProjectName}
          </p>
        </div>
      </div>
      <div
        className="flex justify-between w-full"
        style={{ fontFamily: "monospace" }}
      >
        <div
          className={`w-full  rounded-br-xl rounded-bl-xl ${className} flex justify-start gap-4 items-center px-2 `}
        >
          <p>
            <RiArrowRightLine className="text-white hover:scale-75 duration-200"/>
          </p>
          <p className={`${descriptionStyle} md:text-md text-[15px]`}>
            {Description && Description}
          </p>
          <p className={`${descriptionStyle} md:text-md text-[15px]`}>
            {Description2}
          </p>
          <p className={`${descriptionStyle} md:text-md text-[15px]`}>
            {Description3}
          </p>
        </div>
        <div className="rounded-tr-xl rounded-bl-xl rounded-br-xl flex relative ">
          <div className={`h-6 w-6 absolute ${className}`}></div>
          <div
            className="h-full w-full rounded-full bg-[#f5f0e3] flex justify-center items-center p-2 z-10 hover:scale-150 duration-300 hover:text-white
          
          "
          >
            <RiArrowRightUpLine
              className={`h-6 rounded-full ${className2} p-1`}
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectChard;
