"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-lg bg-white/20 p-10 rounded-3xl max-w-3xl text-center border border-white/20"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Taste of Home
          </h1>

          <p className="text-xl text-white leading-relaxed mb-8">
            Preserving family recipes, memories, and love across generations.
          </p>

          <button className="bg-[#D97757] hover:scale-105 transition px-8 py-4 rounded-full text-white font-semibold">
            Start Your Recipe Book
          </button>
        </motion.div>
      </div>
    </section>
  );
}