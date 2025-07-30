"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

// Danh sách tính năng
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

// Animation: fade + slide lên với easing mượt
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.40, //Mỗi item xuất hiện cách nhau 0.40s
      duration: 0.6, //Thời gian chuyển động
      ease: "easeInOut", //Mượt mà, không bị gắt
    },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#121212]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Features</h2>

        {/* Grid hiển thị các tính năng */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-[#1e1e1e] p-8 rounded-xl shadow-md hover:shadow-xl transition"
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
