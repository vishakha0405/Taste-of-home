import SectionHeading from "./SectionHeading";
import MasonryGrid from "./MasonryGrid";

export default function FeaturedRecipes() {
  return (
    <section className="bg-[#FAF6F0] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="PRESERVED COLLECTIONS"
          title="Recipes that carry"
          highlight="whole lifetimes"
        />

        <MasonryGrid />

      </div>
    </section>
  );
}