import { homeFeed } from "@/data/homeFeed";

import RecipeCard from "./RecipeCard";
import PhotoCard from "./PhotoCard";

import MemoryQuoteCard from "./MemoryQuoteCard";
import StickyNoteCard from "./StickyNoteCard";
import RecipeNoteCard from "./RecipeNoteCard";
import HandwrittenCard from "./HandwrittenCard";

export default function MasonryGrid() {
  return (
    <div className="columns-1 gap-8 space-y-8 md:columns-2 xl:columns-3">
      {homeFeed.map((item) => {
        switch (item.type) {
          case "recipe":
            return (
              <RecipeCard
                key={item.id}
                image={item.image}
                title={item.title}
              />
            );

          case "photo":
            return (
              <PhotoCard
                key={item.id}
                image={item.image}
              />
            );

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