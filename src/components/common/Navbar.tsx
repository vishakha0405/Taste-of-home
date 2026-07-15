"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const supabase = createClient();

const handleShareRecipe = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("Session:", session);
console.log("User:", session?.user);

  if (session) {
    console.log("User is logged in");
    router.push("/upload");
    return;
  }

  console.log("User is NOT logged in");

  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback?next=/upload`,
    },
  });
};

  return (
    <header className="sticky top-0 z-50 border-b border-[#E9DED2] bg-[#FAF6F0]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="font-medium text-[#5A4737] transition-colors hover:text-[#C17F5F]"
          >
            Discover
          </Link>

          <Link
            href="/memories"
            className="font-medium text-[#5A4737] transition-colors hover:text-[#C17F5F]"
          >
            Memories
          </Link>

          <Link
            href="/community"
            className="font-medium text-[#5A4737] transition-colors hover:text-[#C17F5F]"
          >
            Community
          </Link>

          <Link
            href="/about"
            className="font-medium text-[#5A4737] transition-colors hover:text-[#C17F5F]"
          >
            About
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <UserMenu />

          <button
            onClick={handleShareRecipe}
            className="rounded-full bg-[#C17F5F] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#B36E4C]"
          >
            Share a Recipe
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#3D2B1F] md:hidden"
        >
          <Menu size={28} />
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
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-[#FAF6F0] shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between border-b border-[#E9DED2] p-6">
          <h2 className="text-xl font-semibold text-[#3D2B1F]">Menu</h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-8">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Discover
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

          <UserMenu />

          <button
            onClick={() => {
              setIsOpen(false);
              handleShareRecipe();
            }}
            className="rounded-full bg-[#C17F5F] py-3 text-center font-semibold text-white transition hover:bg-[#B36E4C]"
          >
            Share a Recipe
          </button>
        </nav>
      </div>
    </header>
  );
}