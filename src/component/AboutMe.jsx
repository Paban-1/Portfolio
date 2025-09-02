import React from "react";
import Title from "./Title";
import ChardAboutTwo from "./reUse/ChardAboutTwo";
import { motion } from "framer-motion";
import { ABOUTME, ChardVariantsTwo, HeadingVariants } from "./Index";
const AboutMe = ({id}) => {
  return (
    <section className="space-y-2 p-8" id={id}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={HeadingVariants}
      >
        <Title TitleStyle="md:text-4xl text-xl" Title="What sets me apart" />
      </motion.div>
      <motion.div className="flex flex-wrap gap-4 justify-center items-center px-6">
        {ABOUTME.map((about, index) => {
          return (
            <ChardAboutTwo
              key={index}
              variants={ChardVariantsTwo}
              FristSpanStyle="font-bold"
              headingStyle="font-bold"
              backGround={about.background}
              IconCompo={about.icon}
              heading={about.Heading}
              infoOne={about.para}
              infoTwo={about.paraOne}
              infoThree={about.paraTwo}
              infoFour={about.paraThree}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default AboutMe;
