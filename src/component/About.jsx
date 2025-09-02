import React from "react";
import ChardAboutOne from "./reUse/ChardAboutOne";
import ChardAboutTwo from "./reUse/ChardAboutTwo";
import Title from "./Title";
import { motion } from "framer-motion";
import { DATA, DATATWO, HeadingVariants, ChardVariantsTwo } from "./Index";

const About = ({id}) => {
  return (
    <section className="space-y-6 mb-12" id={id}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={HeadingVariants}
      >
        <Title
          TitleStyle="md:text-4xl text-xl"
          Title="Core features that set us"
          Title2="apart from the competition"
        />
      </motion.div>
      <div className="flex flex-wrap gap-4 justify-center items-center px-6">
        <motion.div className="space-y-2">
          {DATA.map((data, index) => {
            return (
              <ChardAboutTwo
                key={index}
                variants={ChardVariantsTwo}
                FristSpanStyle="font-bold"
                IconCompo={data.icon}
                backGround={data.background}
                infoOne={data.para}
                infoTwo={data.paraOne}
                infoThree={data.paraTwo}
                infoFour={data.paraThree}
              />
            );
          })}
        </motion.div>
        <div>
          <ChardAboutOne />
        </div>
        <motion.div className="space-y-2">
          {DATATWO.map((dataTwo, index) => {
            return (
              <ChardAboutTwo
                key={index}
                variants={ChardVariantsTwo}
                FristSpanStyle="font-bold"
                IconCompo={dataTwo.icon}
                backGround={dataTwo.background}
                infoOne={dataTwo.para}
                infoTwo={dataTwo.paraOne}
                infoThree={dataTwo.paraTwo}
                infoFour={dataTwo.paraThree}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
