"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF6F0]/90 border-b border-[#E9DED2]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-[#C17F5F] flex items-center justify-center text-white text-xl">
            ❤
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#3D2B1F]">
              Taste of Home
            </h1>

            <p className="text-sm text-[#8E7B6A] italic">
              Every recipe has a story
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex gap-10 text-[#5A4737] font-medium">

          <a href="#">Home</a>

          <a href="#">Recipes</a>

          <a href="#">Memories</a>

          <a href="#">Community</a>

          <a href="#">About</a>

        </nav>

        {/* Button */}

        <button className="bg-[#C17F5F] hover:bg-[#B36E4C] transition text-white px-7 py-3 rounded-full font-semibold shadow-lg">
          Share Recipe
        </button>

      </div>
    </header>
  );
}