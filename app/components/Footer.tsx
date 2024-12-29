import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-4">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 mb-4">
            TradePro
          </h1>
          <p className="text-sm text-white">
            Your go-to place for all things technology, where we provide
            insightful articles and resources to help you stay ahead in the tech
            world.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                App Development
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                AI Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 mb-4">
            Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-violet-500">
                Case Studies
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="border-t border-gray-700 mt-12 pt-4 flex justify-between items-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-white">
          © 2024 TradePro. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <motion.a
            href="#"
            className="text-white hover:text-violet-500"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <FaFacebook className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            className="text-white hover:text-violet-500"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FaTwitter className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            className="text-white hover:text-violet-500"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaInstagram className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            className="text-white hover:text-violet-500"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
