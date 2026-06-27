"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="relative my-24 h-[420px] sm:h-[500px] md:h-[600px] overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.08 }}
        transition={{ duration: 10, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src="/images/community/quote-bg-new.jpg"
          alt="Recipe Book"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/75"  />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="[font-family:var(--font-allura)] text-4xl md:text-6xl text-[#D28D69]"
        >
          a thought to remember
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl font-[var(--font-playfair)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl"
        >
          "The recipes we inherit are the most honest portraits of the people
          we loved."
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-lg text-white/80 md:text-3xl"
        >
          — Taste of Home
        </motion.p>

      </div>

    </section>
  );
}