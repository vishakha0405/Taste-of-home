import { homeFeed } from "@/data/homeFeed";

import RecipeCard from "./RecipeCard";
import PhotoCard from "./PhotoCard";
import MemoryQuoteCard from "./MemoryQuoteCard";
import StickyNoteCard from "./StickyNoteCard";
import RecipeNoteCard from "./RecipeNoteCard";
import HandwrittenCard from "./HandwrittenCard";

type Recipe = {
  id: string;
  recipe_name: string;
  image_url: string;
};

type MasonryGridProps = {
  recipes: Recipe[];
};

export default function MasonryGrid({
  recipes,
}: MasonryGridProps) {
  let recipeIndex = 0;

  return (
    <div className="columns-1 gap-8 space-y-8 md:columns-2 xl:columns-3">
      {homeFeed.map((item) => {
        switch (item.type) {
          case "recipe": {
            const recipe = recipes[recipeIndex++];

            if (!recipe) return null;

            return (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                image={recipe.image_url}
                title={recipe.recipe_name}
              />
            );
          }

          case "photo":
            return <PhotoCard key={item.id} image={item.image} />;

          case "quote":
            return (
              <MemoryQuoteCard
                key={item.id}
                quote={item.quote}
              />
            );

          case "sticky":
            return (
              <StickyNoteCard
                key={item.id}
                text={item.text}
              />
            );

          case "recipe-note":
            return (
              <RecipeNoteCard
                key={item.id}
                text={item.text}
              />
            );

          case "handwritten":
            return (
              <HandwrittenCard
                key={item.id}
                text={item.text}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}