import React from "react";
import SkillsChard from "./reUse/SkillsChard";
import Title from "./Title";
import {
  SKILLSSET,
  HeadingVariants,
  containerVariants,
  ChardVariants,
} from "./Index";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="space-y-6 mb-16 select-none" id="skill">
      <motion.div
        className="w-full flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={HeadingVariants}
      >
        <Title Title="What i know to build" Title2="what you need" />
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-2 justify-center items-center p-2"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        {SKILLSSET.map((skillsset, index) => {
          return (
            <SkillsChard
              key={index}
              variants={ChardVariants}
              className={skillsset.className}
              text={skillsset.text}
              describe={skillsset.describe}
              describeTwo={skillsset.describeTwo}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
