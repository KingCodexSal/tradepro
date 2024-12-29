"use client";
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Distribution from "./components/Distribution";
import StatsSection from "./components/StatsSection";
import CryptoControlSection from "./components/CryptoControlSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/Contact";
import BlogSection from "./components/Blog";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <About />
      <Distribution />
      <StatsSection />
      <CryptoControlSection />
      <Testimonials />
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Page;
