"use client";

import { BookOpen, Search } from "lucide-react";

export default function CommunityHero() {
  return (
    <section className="bg-[#FAF6F0]">
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-3">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C17F5F] shadow-md">
              <BookOpen
                size={24}
                className="text-[#3D2B1F]"
                strokeWidth={2}
              />
            </div>

            <div>
              <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-semibold leading-none text-[#3D2B1F]">
                Community Stories
              </h1>

              <p
                style={{ fontFamily: "var(--font-allura)" }}
                className="mt-1 text-[24px] leading-none text-[#A2785B]"
              >
                Discover recipes, memories and traditions shared by families.
              </p>
            </div>

          </div>

          {/* Search */}
          <div className="w-full lg:max-w-[620px]">

            <div className="flex items-center rounded-full bg-[#F3EBDD] px-6 py-3">

              <Search
                size={20}
                className="mr-3 shrink-0 text-[#8A735E]"
              />

              <input
                type="text"
                placeholder="Search family recipes, memories..."
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#8A735E]"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}