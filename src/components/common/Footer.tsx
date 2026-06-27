"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4B3426] text-[#E8D8CC]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C17F5F] text-white text-xl">
                ❤
              </div>

              <h2 className="font-[var(--font-playfair)] text-3xl font-semibold text-white">
                Taste of Home
              </h2>
            </Link>

            <p className="mt-6 max-w-xs text-lg leading-9 text-[#D6C3B5]">
              Preserving the recipes and memories that make us who we are.
            </p>

            <p className="mt-8 font-[var(--font-allura)] text-5xl text-[#D8946A]">
              Made with love
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[3px] text-[#A98D7B]">
              Platform
            </h3>

            <div className="space-y-5">
              <Link href="#" className="block hover:text-white transition">
                Discover Recipes
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Share a Memory
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Family Archive
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Collections
              </Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[3px] text-[#A98D7B]">
              Community
            </h3>

            <div className="space-y-5">
              <Link href="#" className="block hover:text-white transition">
                Stories
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Contributors
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Events
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Newsletter
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[3px] text-[#A98D7B]">
              Company
            </h3>

            <div className="space-y-5">
              <Link href="#" className="block hover:text-white transition">
                About Us
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Press
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Careers
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[3px] text-[#A98D7B]">
              Legal
            </h3>

            <div className="space-y-5">
              <Link href="#" className="block hover:text-white transition">
                Privacy
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Terms
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Cookie Policy
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Accessibility
              </Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-14 border-t border-[#6C5140]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-[#B99F8E] md:flex-row">

          <p>
            © 2026 Taste of Home. All rights reserved.
          </p>

          <p>
            Built to last &nbsp;•&nbsp; Designed for families &nbsp;•&nbsp;
            Made with ❤️
          </p>

        </div>

      </div>
    </footer>
  );
}