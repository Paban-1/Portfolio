import React from "react";
import { motion } from "framer-motion";

const ChardAboutTwo = ({
  infoOne = "",
  infoTwo = "",
  infoThree = "",
  infoFour = "",
  FristSpanStyle = "",
  backGround = "",
  headingStyle = "",
  heading,
  IconCompo,
  variants,
}) => {
  return (
    <div
      className={`rounded-xl flex justify-center items-center ${backGround} `}
    >
      <div className="p-2 w-full h-full">
        <div className="mb-4 flex items-center space-x-2">
          {IconCompo && (
            <IconCompo className="bg-black rounded-md text-white p-1 w-6 h-6" />
          )}
          <p className={`${headingStyle}`}>{heading && heading}</p>
        </div>
        <motion.div initial="hidden" whileInView="visible" variants={variants}>
          <p className="text-[15px]">
            <span className={`${FristSpanStyle}`}>{infoOne && infoOne}</span>
            {infoTwo && infoTwo}
            <br /> <span>{infoThree && infoThree}</span>
            <br /> {infoFour && infoFour}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ChardAboutTwo;
