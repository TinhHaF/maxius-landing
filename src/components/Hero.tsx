"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-28 bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          The Future of Startup Landing Pages
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Built with Next.js, TailwindCSS and modern UI principles.
        </p>
        <a
          href="#features"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Explore Features
        </a>
      </motion.div>
    </section>
  );
}
