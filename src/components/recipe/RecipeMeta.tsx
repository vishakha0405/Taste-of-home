import {
  Clock3,
  Flame,
  Users,
  ChefHat,
  Utensils,
  Leaf,
} from "lucide-react";

import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeMeta({ recipe }: Props) 

 {
  const items = [
  {
    icon: <Clock3 className="h-5 w-5 text-[#C17F5F]" />,
    value: `${recipe.prep_time} min`,
    label: "Prep Time",
  },
  {
    icon: <Flame className="h-5 w-5 text-[#C17F5F]" />,
    value: `${recipe.cook_time} min`,
    label: "Cook Time",
  },
  {
    icon: <Users className="h-5 w-5 text-[#7A9E7E]" />,
    value: recipe.servings,
    label: "Servings",
  },
  {
    icon: <ChefHat className="h-5 w-5 text-[#7A9E7E]" />,
    value: recipe.difficulty,
    label: "Difficulty",
  },
  {
    icon: <Utensils className="h-5 w-5 text-[#C17F5F]" />,
    value: recipe.category,
    label: "Category",
  },
  {
    icon: <Leaf className="h-5 w-5 text-[#7A9E7E]" />,
    value: recipe.diet,
    label: "Diet",
  },
];

  return (
    <section className="mt-10 rounded-[30px] border border-[#E9DED2] bg-[#FDF9F4] py-5 px-6 shadow-sm">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7EFE7]">
              {item.icon}
            </div>

            <p className="text-lg font-semibold text-[#3D2B1F]">
              {item.value}
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#8A735E]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}