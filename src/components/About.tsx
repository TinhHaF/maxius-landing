"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#181818]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Maxius
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Maxius helps startups launch faster with beautiful,
          performance-optimized landing pages.
        </motion.p>
      </div>
    </section>
  );
}
