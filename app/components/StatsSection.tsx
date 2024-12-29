import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaGlobe, FaPaperPlane, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="py-20 px-6 md:px-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="bg-gray-900 p-8 rounded-lg shadow-lg flex items-center space-x-6"
        >
          <FaDollarSign className="text-4xl text-violet-600" />
          <div>
            <h3 className="text-md font-semibold text-violet-600">
              Total Invested
            </h3>
            <p className="text-2xl text-violet-400">
              {inView && (
                <CountUp start={0} end={9374034} duration={4} separator="," />
              )}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="bg-gray-900 p-8 rounded-lg shadow-lg flex items-center space-x-6"
        >
          <FaGlobe className="text-4xl text-violet-600" />
          <div>
            <h3 className="text-md font-semibold text-violet-600">
              Global Nation
            </h3>
            <p className="text-2xl text-violet-400">
              {inView && <CountUp start={0} end={198} duration={4} />}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="bg-gray-900 p-8 rounded-lg shadow-lg flex items-center space-x-6"
        >
          <FaPaperPlane className="text-4xl text-violet-600" />
          <div>
            <h3 className="text-md font-semibold text-violet-600">
              Remittances
            </h3>
            <p className="text-2xl text-violet-400">
              {inView && (
                <CountUp start={0} end={99915448} duration={4} separator="," />
              )}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="bg-gray-900 p-8 rounded-lg shadow-lg flex items-center space-x-6"
        >
          <FaUsers className="text-4xl text-violet-600" />
          <div>
            <h3 className="text-md font-semibold text-violet-600">
              Total Members
            </h3>
            <p className="text-2xl text-violet-400">
              {inView && (
                <CountUp start={0} end={40216} duration={4} separator="," />
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
