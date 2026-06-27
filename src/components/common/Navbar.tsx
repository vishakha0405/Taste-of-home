"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9DED2] bg-[#FAF6F0]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C17F5F] text-xl text-white">
            ❤
          </div>

          <div>
            <h1 className="whitespace-nowrap text-2xl font-bold text-[#3D2B1F] sm:text-3xl">
              Taste of Home
            </h1>

            <p className="text-sm italic text-[#8E7B6A]">
              Every recipe has a story
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-10 font-medium text-[#5A4737] md:flex">
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/memories">Memories</Link>
          <Link href="/community">Community</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Desktop Button */}
        <Link
          href="/upload"
          className="hidden rounded-full bg-[#C17F5F] px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-[#B36E4C] md:block"
        >
          Share Recipe
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#3D2B1F] md:hidden"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-[#FAF6F0] shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E9DED2] p-6">
          <h2 className="text-2xl font-bold text-[#3D2B1F]">Menu</h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-8 p-8 text-xl font-medium text-[#3D2B1F]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link href="/recipes" onClick={() => setIsOpen(false)}>
            Recipes
          </Link>

          <Link href="/memories" onClick={() => setIsOpen(false)}>
            Memories
          </Link>

          <Link href="/community" onClick={() => setIsOpen(false)}>
            Community
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <Link
            href="/upload"
            onClick={() => setIsOpen(false)}
            className="mt-6 rounded-full bg-[#C17F5F] py-4 text-center font-semibold text-white"
          >
            Share Recipe
          </Link>
        </nav>
      </div>
    </header>
  );
}