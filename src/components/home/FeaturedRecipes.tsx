import SectionHeading from "./SectionHeading";
import MasonryGrid from "./MasonryGrid";
import Link from "next/link";
import { getCommunityRecipes } from "@/actions/community";

export default async function FeaturedRecipes() {
  const recipes = await getCommunityRecipes();

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

        <MasonryGrid recipes={recipes} />

        <div className="mt-16 flex justify-center">
          <Link
            href="/community"
            className="rounded-full border border-[#C17F5F] px-8 py-3 text-[#3D2B1F] transition-all duration-300 hover:bg-[#C17F5F] hover:text-white"
          >
            View More Recipes →
          </Link>
        </div>

      </div>
    </section>
  );
}