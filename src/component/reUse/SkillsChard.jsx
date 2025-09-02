import React from "react";
import { RiArrowRightUpLine, RiArrowRightLine } from "@remixicon/react";
import { motion } from "framer-motion";

const SkillsChard = ({
  className = "",
  text = "",
  describe = "",
  describeTwo = "",
  variants,
}) => {
  return (
    <motion.div className={`rounded-xl p-3 ${className}`} variants={variants}>
      <div className="flex-col space-y-6">
        <div className="flex justify-between">
          <p className={`font-bold text-md`}>{text}</p>

          <div className="bg-black px-4 rounded-full">
            <RiArrowRightLine className="text-white" />
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <div>
            <p className="text-xl">
              {describe}
              <br />
              <span> {describeTwo}</span>
            </p>
          </div>
          <RiArrowRightUpLine className="h-10 w-12" />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsChard;
