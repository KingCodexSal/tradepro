import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ContactSection = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Function to toggle accordion items
  const handleAccordionToggle = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Common motion div settings for animation
  const accordionAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: (isActive: boolean) => ({
      height: isActive ? "auto" : 0,
      opacity: isActive ? 1 : 0,
    }),
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <section className="py-12 px-6 bg-gray-900 overflow-hidden text-white">
      <div className="w-full text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700">
          Trading Questions, <br />
          Answered here
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-center items-center">
        {/* Accordion Section */}
        <motion.div
          className="lg:w-2/5 w-full space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700">
            How Can We Help?
          </h3>

          <div className="space-y-4">
            {[
              {
                title: "General Inquiry",
                content:
                  "Feel free to reach out with any general questions you may have!",
              },
              {
                title: "Technical Support",
                content:
                  "If you're facing technical issues, our team is here to help you!",
              },
              {
                title: "Billing Questions",
                content:
                  "Have questions about your bill? We're here to assist you with that!",
              },
            ].map((item, index) => (
              <div key={index}>
                <button
                  className="w-full text-left py-4 text-lg font-semibold flex justify-between items-center"
                  onClick={() => handleAccordionToggle(index)}
                  aria-expanded={activeAccordion === index ? "true" : "false"}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700">
                    {item.title}
                  </span>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: activeAccordion === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeAccordion === index ? (
                      <FaChevronUp className="w-5 h-5" />
                    ) : (
                      <FaChevronDown className="w-5 h-5" />
                    )}
                  </motion.div>
                </button>

                <motion.div
                  className="bg-slate-800 p-4"
                  initial={accordionAnimation.initial}
                  animate={accordionAnimation.animate(
                    activeAccordion === index
                  )}
                  transition={accordionAnimation.transition}
                >
                  <p className="text-white">{item.content}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="lg:w-2/5 w-full p-6 bg-slate-800 rounded-xl shadow-lg mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700">
            Contact Us
          </h3>
          <form>
            <div className="space-y-4">
              {[
                { label: "Name", type: "text", id: "name" },
                { label: "Email", type: "email", id: "email" },
                { label: "Subject", type: "text", id: "subject" },
                { label: "Message", type: "textarea", id: "message" },
              ].map((input, index) => (
                <div key={index}>
                  <label
                    htmlFor={input.id}
                    className="block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700"
                  >
                    {input.label}
                  </label>
                  {input.type === "textarea" ? (
                    <textarea
                      id={input.id}
                      className="w-full p-3 mt-2 bg-slate-700 text-white rounded-lg resize-none focus:outline-none"
                      rows={4}
                      required
                    ></textarea>
                  ) : (
                    <input
                      id={input.id}
                      type={input.type}
                      className="w-full p-3 mt-2 bg-slate-700 text-white rounded-lg focus:outline-none"
                      required
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-3 mt-6 bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 text-white font-semibold rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
