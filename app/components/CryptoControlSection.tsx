import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Use next/image for optimized images

const CryptoControlSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center w-full h-full">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pr-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.2,
              ease: [0.42, 0, 0.58, 1],
              delay: 0.2,
            }}
            className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 mb-6 leading-relaxed text-center"
          >
            Take full control of your crypto app
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.2,
              ease: [0.42, 0, 0.58, 1],
              delay: 0.4,
            }}
            className="space-y-6 mb-6"
          >
            {/* Step 1 */}
            <li className="flex flex-col lg:flex-row items-center md:space-x-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 text-white font-semibold text-2xl mb-4 lg:mb-0">
                1
              </div>
              <div className="flex flex-col text-center lg:text-left w-full">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full mx-4 lg:mx-0">
                  <h4 className="font-semibold text-violet-600">
                    Download from Playstore
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Get the app from Playstore and start your crypto journey
                    easily.
                  </p>
                </div>
              </div>
            </li>

            {/* Step 2 */}
            <li className="flex flex-col lg:flex-row items-center md:space-x-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 text-white font-semibold text-2xl mb-4 lg:mb-0">
                2
              </div>
              <div className="flex flex-col text-center lg:text-left w-full">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full mx-4 lg:mx-0">
                  <h4 className="font-semibold text-violet-600">
                    Create an account easily
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Signing up is simple and gets you started in no time.
                  </p>
                </div>
              </div>
            </li>

            {/* Step 3 */}
            <li className="flex flex-col lg:flex-row items-center md:space-x-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 text-white font-semibold text-2xl mb-4 lg:mb-0">
                3
              </div>
              <div className="flex flex-col text-center lg:text-left w-full">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full mx-4 lg:mx-0">
                  <h4 className="font-semibold text-violet-600">
                    Choose crypto and start trading
                  </h4>
                  <p className="text-gray-400 mt-2">
                    Select your preferred crypto and begin trading immediately.
                  </p>
                </div>
              </div>
            </li>
          </motion.ul>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.4,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="w-full lg:w-1/2 mb-8 lg:mb-0"
        >
          <Image
            src="/crypto-app.jpg"
            alt="Crypto App"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-full md:mt-24 lg:mt-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoControlSection;
