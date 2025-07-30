"use client";
import { motion } from "framer-motion";

const features = [
  { title: "Performance", desc: "Lightning-fast load time with Next.js 14." },
  {
    title: "Design",
    desc: "Minimalist and modern layout inspired by Maxius.io.",
  },
  {
    title: "Responsive",
    desc: "Fully responsive across devices with Tailwind CSS.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#121212]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-[#1e1e1e] p-8 rounded-xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
