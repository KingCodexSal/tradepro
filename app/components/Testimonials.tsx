import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-12 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 mb-6 leading-relaxed sm:text-center">
          What Our Customers Say
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote:
      "Working with Adrian was a fantastic experience. His attention to detail and deep understanding of the project made all the difference. His ability to meet deadlines and ensure quality in every aspect of the work speaks volumes. Highly recommend Adrian for anyone looking to take their business to the next level.",
    name: "Michael Johnson",
    title: "CEO, AlphaStream Technologies",
  },
  {
    quote:
      "Adrian's expertise and professionalism were apparent from the start. His creative vision and dedication to producing high-quality work truly impressed us. The project exceeded our expectations, and we couldn't have asked for a better partner to bring our ideas to life.",
    name: "David Jones",
    title: "Lead Developer, AlphaStream Technologies",
  },
  {
    quote:
      "If you're looking for someone who takes pride in every project, Adrian is the one. His commitment to excellence, paired with his positive attitude, made our collaboration an enjoyable experience. He helped us create a website that not only meets but exceeds our goals.",
    name: "Mark Andre",
    title: "Product Manager, AlphaStream Technologies",
  },
  {
    quote:
      "Adrian was an exceptional partner throughout the development process. His deep knowledge of the industry and proactive communication ensured that everything went smoothly. We’re thrilled with the final result and highly recommend him for any web development needs.",
    name: "Dominic Prince",
    title: "Marketing Director, AlphaStream Technologies",
  },
  {
    quote:
      "Adrian brought incredible value to our project. His professional approach, combined with his passion for development, made a significant impact on the outcome. Working with him was a pleasure, and we look forward to future collaborations.",
    name: "Sarah Norman",
    title: "Operations Manager, AlphaStream Technologies",
  },
];

export default Testimonials;
