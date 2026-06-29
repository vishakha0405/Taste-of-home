import CommunityCard from "./CommunityCard";
import CategoryTabs from "./CategoryTabs";
import { getCommunityRecipes } from "@/actions/community";

export default async function CommunityGrid() {
  const recipes = await getCommunityRecipes();

  return (
    <>
      <CategoryTabs />

      <section className="bg-[#FAF6F0] py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#C17F5F]" />
              <span className="h-3 w-3 rounded-full bg-[#E5D7C8]" />
              <span className="h-3 w-3 rounded-full bg-[#A6B89A]" />

              <p className="ml-3 text-2xl text-[#7B6A58]">
                Showing {recipes.length} family recipes
              </p>

              <div className="h-px flex-1 bg-[#E9DED2]" />
            </div>
          </div>

          {recipes.length === 0 ? (
            <div className="py-24 text-center">
              <h2 className="text-3xl font-[var(--font-playfair)] text-[#3D2B1F]">
                No recipes yet 🍲
              </h2>

              <p className="mt-4 text-[#7B6A58]">
                Be the first to share your family's recipe.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {recipes.map((recipe) => (
                <CommunityCard
               id={recipe.id}
               key={recipe.id}
               image={recipe.image_url}
               title={recipe.recipe_name}
               description={recipe.story}
               generation={recipe.generation}
               category1={recipe.category}
               category2={recipe.difficulty}
               author={recipe.author_name}
               avatar={recipe.author_name?.charAt(0).toUpperCase() ?? "?"}
               likes="0"
               comments="0"
               time={`${recipe.prep_time} mins`}
               />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}