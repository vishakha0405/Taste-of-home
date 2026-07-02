import SectionHeading from "./SectionHeading";
import MasonryGrid from "./MasonryGrid";
import Link from "next/link";

export default function FeaturedRecipes() {
  return (
    <section
  id="featured-recipes"
  className="bg-[#FAF6F0] py-24"
>
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="PRESERVED COLLECTIONS"
          title="Recipes that carry"
          highlight="whole lifetimes"
        />

        <MasonryGrid />

        <div className="mt-16 flex justify-center">
  <Link
    href="/recipes"
    className="rounded-full border border-[#C17F5F] px-8 py-3 text-[#3D2B1F] transition-all duration-300 hover:bg-[#C17F5F] hover:text-white"
  >
    View More Recipes →
  </Link>
</div>

      </div>
    </section>
  );
}