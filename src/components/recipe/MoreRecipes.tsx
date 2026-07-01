import Image from "next/image";
import Link from "next/link";
import { Clock3, Heart } from "lucide-react";
import { getMoreRecipes } from "@/actions/recipe";

type Props = {
  currentRecipeId: string;
};

export default async function MoreRecipes({
  currentRecipeId,
}: Props) {
  const recipes = await getMoreRecipes(currentRecipeId);

  if (recipes.length === 0) return null;

  return (
    <section className="mt-16 rounded-[34px] border border-[#E7D8CA] bg-[#FFFDF9] p-8 shadow-sm">

      {/* Heading */}

      <div className="mb-8 flex items-end justify-between">

        <div>

          <h2 className="font-[var(--font-cormorant)] text-[46px] text-[#3D2B1F]">
            You May Also Love
          </h2>

          <p className="mt-1 text-lg text-[#6F6155]">
            More family recipes from the community
          </p>

        </div>

        <Link
          href="/community"
          className="text-lg font-medium text-[#C17F5F] hover:underline"
        >
          Browse all →
        </Link>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {recipes.map((recipe) => (

          <Link
            key={recipe.id}
            href={`/recipe/${recipe.id}`}
            className="group overflow-hidden rounded-[22px] border border-[#E8DDD0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Image */}

            <div className="relative h-[180px] overflow-hidden">

              <Image
                src={recipe.image_url}
                alt={recipe.recipe_name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#C17F5F] shadow">

                {recipe.generation}

              </span>

            </div>

            {/* Content */}

            <div className="p-4">

              <h3 className="line-clamp-2 font-[var(--font-cormorant)] text-[28px] leading-7 text-[#3D2B1F]">

                {recipe.recipe_name}

              </h3>

              <p className="mt-1 text-[15px] text-[#7B6A58]">

                {recipe.author_name}

              </p>

              <div className="mt-4 flex items-center justify-between text-[14px] text-[#7B6A58]">

                <span className="flex items-center gap-1">

                  <Heart
                    size={15}
                    className="fill-[#C17F5F] text-[#C17F5F]"
                  />

                  {Math.floor(Math.random() * 400) + 100} saves

                </span>

                <span className="flex items-center gap-1">

                  <Clock3 size={15} />

                  {recipe.cook_time} min

                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}