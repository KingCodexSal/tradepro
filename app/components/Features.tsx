import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCogs,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "Indicators For Trade Success",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur.",
    icon: faChartLine,
  },
  {
    title: "Pro Tools for Risk Mastery",
    description:
      "Ducimus velit repellat optio nihil, nulla similique reprehenderit nulla.",
    icon: faCogs,
  },
  {
    title: "Order Types for Success",
    description:
      "Deserunt, fugiat error odio sint facilis nostrum deleniti non aliquam.",
    icon: faExchangeAlt,
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.8, 0.25, 1], // Smooth custom bezier curve
          }}
          className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 mb-8 sm:mb-10 leading-relaxed"
        >
          Key Trading Features for <br /> Success
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.9,
                delay: idx * 0.2,
                ease: [0.25, 0.8, 0.25, 1], // Smooth custom bezier curve
              }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-start"
            >
              <div className="text-4xl mb-4 text-purple-500">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl sm:text-xl md:text-lg font-semibold mb-4 text-left">
                {feature.title}
              </h3>
              <p className="text-lg opacity-80 text-left">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
