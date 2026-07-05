import { Quote } from "lucide-react";
import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeStory({ recipe }: Props) {
  return (
    <section className="rounded-[32px] border border-[#E9DED2] bg-[#FDF9F4] p-6 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <Quote
          size={36}
          className="text-[#E7D5C8]"
        />

        <h2 className="font-[var(--font-cormorant)] text-4xl text-[#3D2B1F]">
          The Story Behind the Recipe
        </h2>

      </div>

      {/* Inner Card */}

      <div className="rounded-[24px] bg-[#FAF6F0] p-6">

        <div className="space-y-6 text-[19px] leading-8 text-[#5A4A3C]">
  {recipe.story
    ?.split("\n")
    .filter((paragraph) => paragraph.trim() !== "")
    .map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
</div>

      </div>

    </section>
  );
}