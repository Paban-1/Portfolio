import React from "react";
import ProjectChard from "./reUse/ProjectChard";
import Title from "./Title";
import {
  PROJECTCHARDDATA,
  HeadingVariants,
  containerVariants,
  ChardVariants,
  ChardVariantsTwo,
} from "./Index";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section className="space-y-6 mb-20 select-none" id="project">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={HeadingVariants}
      >
        <Title
          TitleStyle="md:text-4xl text-xl"
          Title="Explore the project that"
          Title2="highlight what i do best"
        />
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-4 justify-center items-center px-6"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants && containerVariants}
      >
        {PROJECTCHARDDATA.map((projectdata) => {
          return (
            <ProjectChard
              key={projectdata.id}
              variants={ChardVariants}
              img={projectdata.img}
              ProjectName={projectdata.ProjectName}
              Description={projectdata.stack1}
              Description2={projectdata.stack2}
              Description3={projectdata.stack3}
              textStyle={projectdata.textStyle}
              descriptionStyle={projectdata.descriptionStyle}
              className={projectdata.className}
              className2={projectdata.className2}
              link={projectdata.link}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Project;
