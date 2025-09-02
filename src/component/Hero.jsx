import React from "react";
import Profile from "./Index";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%" },
  visible: {
    clipPath: "inset(0 0% 0 0%",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-black mt-12 select-none"
      id="home"
    >
      <motion.div
        className="w-full md:w-1/2 py-4 px-8 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl font-bold md:text-7xl"
          variants={textVariants}
        >
          Dive Into The
          <br />
          <motion.span>World Of </motion.span>
          <br />
          Code!
        </motion.h1>
      </motion.div>
      
      <motion.div
        className="w-full md:w-1/2 py-4 px-8 flex justify-center items-center"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img height={250} width={350} src={Profile} alt="" />
      </motion.div>
    </section>
  );
};

export default Hero;
