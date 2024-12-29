"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="overflow-hidden bg-black relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 pt-20 md:pt-0 pb-24"
    >
      <Spotlight
        fill="white"
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
      />
      <Spotlight fill="purple" className="top-10 left-full h-[80vh] w-[50vw]" />
      <Spotlight fill="blue" className="top-28 left-80 h-[80vh] w-[50vw]" />
      <motion.div
        className="text-center md:text-left max-w-xl w-full flex flex-col mb-8 md:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white leading-10"
        >
          <span>
            Trade{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700">
              Smarter
            </span>
            ,
          </span>
          <span className="block mt-2">
            Not{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700">
              Harder
            </span>
            .
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.1 }}
          className="mt-4 text-lg md:text-xl text-white opacity-80 max-w-lg md:max-w-sm break-words"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          perferendis soluta aspernatur totam sapiente.
        </motion.p>

        {/* Button Container */}
        <motion.div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1.15 }}
            className="px-8 py-3 bg-violet-500 text-white font-semibold rounded-md shadow-lg hover:bg-violet-600 transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
      >
        <motion.div
          className="block md:hidden absolute inset-0 rounded-lg bg-gradient-to-b from-indigo-600 via-violet-500 to-transparent opacity-50 blur-sm z-[-1]"
          initial={{ scale: 0.9, opacity: 0.4 }}
          animate={{ scale: 0.95, opacity: 0.5 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: "75%",
            height: "100%",
            top: "-8%",
            left: "12.5%",
          }}
        ></motion.div>

        <motion.div
          className="hidden md:block absolute inset-0 rounded-lg bg-gradient-to-b from-indigo-700 via-violet-600 to-transparent opacity-60 blur-md z-[-1]"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.1, opacity: 0.65 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>

        {/* Image */}
        <motion.img
          src="/hero-img.jpg"
          alt="TradePro Visual"
          className="w-2/3 md:w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
