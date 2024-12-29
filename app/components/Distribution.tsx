import React from "react";
import { motion } from "framer-motion";

const Distribution = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 mb-6 leading-relaxed"
          >
            Distribution for traders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg opacity-80 mb-6"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            maiores hic, vel accusamus nisi debitis consequuntur enim amet
            illum. Numquam beatae at recusandae eaque ipsam vitae ut deserunt
            voluptates quasi!
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-violet-500 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Learn More
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full lg:w-1/2 mb-8 lg:mb-0 mt-8 md:mt-0"
        >
          <img
            src="/distribution.jpg"
            alt="About us"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Distribution;
