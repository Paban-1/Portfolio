import React from "react";
import Profile from "./Index";
import { motion } from "framer-motion";
import { StarIcon,PhoneCall, LucideDownload } from "lucide-react";

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
      className="min-h-screen flex flex-wrap flex-col md:flex-row  justify-center items-center text-black md:mt-2 md:px-20 mt-12 select-none"
      id="home"
    >
      <motion.div
        className="w-full md:w-1/2 py-4 px-8 flex flex-col justify-center items-start space-y-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl md:text-6xl font-bold text-gray-600"
          variants={textVariants}
        >
          Hi, I'm Paban
        </motion.h1>
        <motion.p
          className=" text-2xl md:text-3xl text-gray-600 font-bold rounded-md flex justify-center items-center gap-2 
          
          "
          variants={textVariants}
        >
          Full stack developer
        </motion.p>

        <motion.p
          className="text-xl md:text-[20px] w-2/3 text-gray-500"
          variants={textVariants}
        >
          I create visually appealing and highly functional web applications
          using my Web Dev skills and AI.
        </motion.p>

        <div className="flex gap-2">
          <motion.button
            variants={textVariants}
            className="rounded-md px-2 bg-orange-400 text-white ms:text-xl text-[16px] flex gap-2 py-1 justify-center items-center hover:bg-orange-500 duration-300"
          >
            <LucideDownload />
            Download Resume
          </motion.button>

          <motion.button
            variants={textVariants}
            className="rounded-md px-2 bg-blue-400 text-white ms:text-xl text-[16px] flex gap-2 py-1 justify-center items-center hover:bg-blue-500 duration-300"
          >
            <PhoneCall />
            Talk to AI
          </motion.button>
        </div>
      </motion.div>

      {/* Image component */}

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
