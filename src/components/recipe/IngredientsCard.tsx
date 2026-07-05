import { Leaf } from "lucide-react";
import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function IngredientsCard({ recipe }: Props) {
  const ingredients = recipe.ingredients || [];

  return (
    <aside className="sticky top-28 self-start">
      <section className="rounded-[32px] border border-[#E9DED2] bg-[#FDF9F4] p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-[var(--font-cormorant)] text-4xl text-[#3D2B1F]">
            Ingredients
          </h2>

          <span className="rounded-full bg-[#EFE5D8] px-4 py-2 text-sm font-medium text-[#7B6A58]">
            {recipe.servings} Servings
          </span>
        </div>

        <div className="rounded-[24px] bg-[#FAF6F0] p-6">
          <div className="space-y-5">
            {ingredients.map((item: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-4 border-b border-[#EFE5D8] pb-4 last:border-none"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF5EE]">
                  <Leaf size={16} className="text-[#7A9E7E]" />
                </div>

                <p className="text-[17px] leading-7 text-[#4F4034]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
}