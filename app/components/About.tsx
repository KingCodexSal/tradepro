import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Use Image for optimization

const About = () => {
  return (
    <section
      className="py-[150px] px-6 md:px-20 text-white bg-black"
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 mb-8 lg:mb-0"
        >
          <Image
            src="/about.jpg"
            alt="About us"
            width={600} // Specify the width
            height={400} // Specify the height
            className="rounded-lg shadow-lg"
            priority // Optional if this image is important for LCP
          />
        </motion.div>

        <div className="w-full lg:w-1/2 lg:pl-12">
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 mb-6 leading-relaxed"
          >
            Discover Our Trading Benefits
          </motion.h2>

          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg opacity-80 mb-6"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            vel explicabo, assumenda similique laborum repudiandae non error qui
            distinctio deleniti perferendis neque eveniet soluta nobis libero
            ipsam quibusdam illo delectus!
          </motion.p>

          <motion.button
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-violet-500 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
