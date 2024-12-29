import React from "react";
import { motion } from "framer-motion";

const BlogSection = () => {
  const blogs = [
    {
      title: "Exploring the Future of AI",
      excerpt:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nemo suscipit placeat maiores, voluptatibus aliquam ullam, impedit unde doloremque culpa in. Ab ducimus aliquam amet maiores,nihil necessitatibus dolorum deleniti!",
      image: "/ai.jpg", // Placeholder image
    },
    {
      title: "Understanding JavaScript Closures",
      excerpt:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nemo suscipit placeat maiores, voluptatibus aliquam ullam, impedit unde doloremque culpa in. Ab ducimus aliquam amet maiores,nihil necessitatibus dolorum deleniti!",
      image: "/javascript.jpg", // Placeholder image
    },
    {
      title: "Web Design Trends for 2024",
      excerpt:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nemo suscipit placeat maiores, voluptatibus aliquam ullam, impedit unde doloremque culpa in. Ab ducimus aliquam amet maiores,nihil necessitatibus dolorum deleniti!",
      image: "/website.jpg", // Placeholder image
    },
  ];

  return (
    <section className="py-12 px-6 bg-black text-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700"
        >
          Our Latest Blogs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-white mt-2"
        >
          Catch up on our latest posts and insights.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 + index * 0.2 }} // Adjust delay based on index for stagger effect
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl line-clamp-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700">
                {blog.title}
              </h3>
              <p className="text-white mt-4">{blog.excerpt}</p>
              <a
                href="#"
                className="mt-4 inline-block text-violet-500 text-lg font-semibold"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-700 text-white font-semibold rounded-lg"
        >
          Read More Blogs
        </motion.button>
      </div>
    </section>
  );
};

export default BlogSection;
