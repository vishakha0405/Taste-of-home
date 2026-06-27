"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Heart } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#FAF6F0]  py-24">
      <div className="mx-auto w-[92%] max-w-6xl overflow-hidden rounded-[40px] bg-[#FFF8F2] shadow-[0_25px_60px_rgba(0,0,0,0.12)]">

        <div className="grid items-center lg:grid-cols-2">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[320px] md:h-[450px] lg:h-[560px]"
          >
            <Image
              src="/images/community/cta-book.jpg"
              alt="Family Recipe Book"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 lg:p-12"
          >
            <p className="[font-family:var(--font-allura)] text-4xl text-[#7A9E7E] md:text-5xl">
              it's time
            </p>

            <h2 className="font-[var(--font-playfair)] text-5xl font-bold leading-tight text-[#3D2B1F]">
                   Start preserving your family's legacy today
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#6B5A4A]">
              Every family has recipes that carry decades of love,
              culture, and memory. Don't let another generation
              pass without capturing them.
            </p>

            <div className="mt-10 flex flex-col gap-5">

              <button className="flex items-center justify-center gap-3 rounded-full bg-[#C17F5F] px-8 py-5 text-lg font-semibold text-white transition hover:scale-[1.02] hover:bg-[#B36E4C]">
                <Heart fill="currentColor" size={22} />
                Preserve a Family Recipe
              </button>

              <button className="flex items-center justify-center gap-3 rounded-full border border-[#E5D5C7] bg-white px-8 py-5 text-lg text-[#3D2B1F] transition hover:bg-[#FFF2EA]">
                <BookOpen size={22} />
                Browse Recipes
              </button>

            </div>

            <p className="mt-8 text-center text-[#8A7A69]">
              Free forever · No credit card required · Family
              accounts available
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}