"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:py-16">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="[font-family:var(--font-allura)] mb-2 text-4xl text-[#7A9E7E] md:text-5xl"
          >
            for the ones who remember
          </motion.p>

          <h1 className="font-[var(--font-playfair)] text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-[#3D2B1F] md:text-6xl lg:text-7xl">
            Some recipes
            <br />
            <span className="text-[#C17F5F]">deserve</span>
            <br />
            to live forever.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B5A4A]">
            Some recipes are more than ingredients—they're family traditions,
            Sunday mornings, festival celebrations, and the people we love.
            Preserve every recipe along with the memories that make it home.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/upload"
              className="flex items-center gap-2 rounded-full bg-[#C17F5F] px-7 py-3 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-[#B36E4C] hover:shadow-xl"
            >
              <Heart size={18} fill="currentColor" />
              <span>Preserve a Recipe</span>
            </Link>

            <Link
              href="#featured-recipes"
              className="flex items-center gap-2 rounded-full border border-[#C17F5F] bg-white px-7 py-3 text-[15px] font-medium text-[#3D2B1F] transition-all duration-300 hover:bg-[#F8F3EE] hover:scale-[1.02]"
            >
              <BookOpen size={18} />
              <span>Explore Recipes</span>
            </Link>

          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Warm Background Glow */}
          <div className="absolute -left-10 top-10 -z-10 h-80 w-80 rounded-full bg-[#F2E5D8] blur-3xl" />

          {/* Hero Image */}
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="overflow-hidden rounded-[36px] shadow-[0_25px_70px_rgba(61,43,31,0.16)]"
          >
            <Image
              src="/images/hero/hero.jpg"
              alt="Grandmother cooking"
              width={650}
              height={750}
              priority
              className="h-[560px] w-full object-cover transition duration-1000 hover:scale-[1.02]"
            />
          </motion.div>

          {/* Floating Memory Card */}
          <motion.div
            animate={{
              y: [0, -4, 0],
              rotate: [-3, -2, -3],
            }}
            whileHover={{
              rotate: 0,
              scale: 1.04,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -left-[72px]
              bottom-8
              z-20
              w-[180px]
              rotate-[-3deg]
              rounded-[26px]
              border border-white/20
              bg-[#FAF6F0]/20
              p-5
              backdrop-blur-2xl
              shadow-[0_20px_45px_rgba(61,43,31,0.18)]
            "
          >
            <p className="text-[18px] leading-8 italic font-normal text-[#3D2B1F]">
              “Every Sunday,
              <br />
              her kitchen felt
              <br />
              like home.”
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}