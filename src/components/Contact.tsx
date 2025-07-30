"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#121212] text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6 text-gray-400">
          Let’s build something great together.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#1e1e1e] text-white border border-gray-700 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#1e1e1e] text-white border border-gray-700 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 bg-[#1e1e1e] text-white border border-gray-700 rounded-md"
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

