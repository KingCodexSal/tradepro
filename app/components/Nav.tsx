"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="bg-black text-white sticky top-0 w-full z-50 shadow-md relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 via-violet-400 to-indigo-400 bg-[length:200%_200%] animate-gradient"></div>

      <motion.div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl font-bold"
        >
          <motion.a href="#home" className="text-white">
            TradePro
          </motion.a>
        </motion.div>

        <motion.div className="hidden md:flex items-center justify-center space-x-8">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            href="#home"
            className="hover:text-violet-500 transition text-lg"
          >
            Home
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            href="#about"
            className="hover:text-violet-500 transition text-lg"
          >
            About
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            href="#services"
            className="hover:text-violet-500 transition text-lg"
          >
            Services
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            href="#contact"
            className="hover:text-violet-500 transition text-lg"
          >
            Contact Us
          </motion.a>
        </motion.div>

        <motion.div className="hidden md:flex space-x-4">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="px-5 py-2 bg-transparent border-2 border-violet-500 text-white font-semibold rounded-md shadow-lg hover:bg-violet-500 hover:text-white transition duration-300"
          >
            Login
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-violet-500 text-[white] py-2 px-5 rounded-md hover:bg-violet-600 transition font-semibold"
          >
            Sign Up
          </motion.button>
        </motion.div>

        <motion.div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <motion.div className="relative w-6 h-6">
              <svg
                className={`absolute transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                className={`absolute w-6 h-6 transition-opacity duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-100" : "opacity-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 z-40">
          <a
            href="#home"
            className="text-lg hover:text-violet-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg hover:text-violet-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="text-lg hover:text-violet-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-lg hover:text-violet-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
          <div className="mt-4 space-y-4">
            <motion.button
              className="px-5 py-2 bg-transparent border-2 border-violet-500 text-white font-semibold rounded-md shadow-lg hover:bg-violet-500 hover:text-white transition duration-300 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </motion.button>
            <motion.button
              className="bg-violet-500 text-white font-semibold py-2 px-5 rounded-sm hover:bg-violet-600 transition w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </motion.button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Nav;
