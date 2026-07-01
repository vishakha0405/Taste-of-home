import RecipeHero from "./RecipeHero";
import RecipeMeta from "./RecipeMeta";
import RecipeStory from "./RecipeStory";
import IngredientsCard from "./IngredientsCard";
import StepsCard from "./StepsCard";
import MoreRecipes from "./MoreRecipes";

import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipePage({ recipe }: Props) {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <RecipeHero recipe={recipe} />

        <RecipeMeta recipe={recipe} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">

          <div className="space-y-8">
            <RecipeStory recipe={recipe} />
            <StepsCard recipe={recipe} />
          </div>

          <IngredientsCard recipe={recipe} />

        </div>

        <div className="mt-16">
          <MoreRecipes currentRecipeId={recipe.id} />
        </div>

      </div>
    </main>
  );
}