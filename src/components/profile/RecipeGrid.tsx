import Link from "next/link";
import Image from "next/image";

type Recipe = {
  id: string;
  recipe_name: string;
  image_url: string;
  category: string;
  difficulty: string;
};

type RecipeGridProps = {
  recipes: Recipe[];
};

export default function RecipeGrid({
  recipes,
}: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="rounded-3xl border border-[#E8DDD2] bg-white p-12 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-[#3D2B1F]">
          No recipes yet
        </h2>

        <p className="mt-3 text-[#7A6A5A]">
          Share your first family recipe ❤️
        </p>

        <Link
          href="/upload"
          className="mt-6 inline-flex rounded-full bg-[#C17F5F] px-6 py-3 font-medium text-white transition hover:bg-[#A96746]"
        >
          Share Recipe
        </Link>
      </div>
    );
  }

  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-[#3D2B1F]">
        My Recipes ({recipes.length})
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="overflow-hidden rounded-3xl border border-[#E8DDD2] bg-white shadow-sm"
          >
            <div className="relative h-56">
              <Image
                src={recipe.image_url}
                alt={recipe.recipe_name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 p-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#3D2B1F]">
                  {recipe.recipe_name}
                </h3>

                <p className="mt-2 text-[#7A6A5A]">
                  {recipe.category} • {recipe.difficulty}
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/recipe/${recipe.id}`}
                  className="flex-1 rounded-xl border border-[#C17F5F] py-3 text-center font-medium text-[#C17F5F] transition hover:bg-[#F8F2EC]"
                >
                  View
                </Link>

                <Link
                  href={`/recipe/edit/${recipe.id}`}
                  className="flex-1 rounded-xl bg-[#C17F5F] py-3 text-center font-medium text-white transition hover:bg-[#A96746]"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}