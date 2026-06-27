"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#FAF6F0]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="[font-family:var(--font-allura)] mb-6 text-4xl text-[#7A9E7E] md:text-5xl">
             for the ones who remember
          </p>

          <h1 className="font-[var(--font-playfair)] text-5xl font-bold leading-tight text-[#3D2B1F] md:text-6xl lg:text-7xl">
            Some recipes
            <br />
            <span className="text-[#C17F5F]">deserve</span>
            <br />
            to live forever.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-[#6B5A4A]">
            Preserve your mother's, grandmother's and family's recipes together
            with the beautiful memories behind every dish.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-full bg-[#C17F5F] px-8 py-4 font-semibold text-white transition hover:bg-[#b46d4b]">
              ❤️ Preserve Recipe
            </button>

            <button className="rounded-full border border-[#C17F5F] px-8 py-4 text-[#3D2B1F] transition hover:bg-white">
              Browse Recipes
            </button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <Image
              src="/images/hero/hero.jpg"
              alt="Grandmother cooking"
              width={600}
              height={800}
              priority
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="absolute -right-6 top-8 max-w-xs rounded-3xl bg-[#7A9E7E] p-6 text-white shadow-xl">
            <p className="text-lg leading-8">
              "I can still smell her kitchen every time I make this."
            </p>

            <p className="mt-4 opacity-80">— Vishakha</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}