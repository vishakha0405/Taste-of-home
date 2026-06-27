import Link from "next/link";
import MasonryGrid from "./MasonryGrid";

export default function CommunityPreview() {
  return (
    <section className="bg-[#FAF6F0] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 flex items-end justify-between">

          <div>

            <p className="mb-5 uppercase tracking-[0.4em] text-sm text-[#7F9A7C]">
              Preserved Collections
            </p>

            <h2 className="font-[var(--font-playfair)] text-6xl leading-tight text-[#3D2B1F]">
              Recipes that carry{" "}
              <span className="text-[#C17F5F]">
                whole lifetimes
              </span>
            </h2>

          </div>

          <Link
            href="/recipes"
            className="text-2xl text-[#C17F5F] transition hover:translate-x-1"
          >
            Browse all recipes →
          </Link>

        </div>

        {/* Preview Grid */}
        <MasonryGrid />

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/community"
            className="rounded-full bg-[#C17F5F] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#B36E4C]"
          >
            View Community →
          </Link>
        </div>

      </div>
    </section>
  );
}