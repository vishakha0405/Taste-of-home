import Image from "next/image";
import {
  Bookmark,
  Heart,
  MapPin,
  Share2,
  Star,
} from "lucide-react";
import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeHero({ recipe }: Props) {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">

      {/* LEFT IMAGE */}

      <div className="relative h-[560px] overflow-hidden rounded-[32px]">

        <Image
          src={recipe.image_url}
          alt={recipe.recipe_name}
          width={900}
          height={900}
          className="h-full w-full object-cover"
        />

        {/* Tags */}

        <div className="absolute left-6 top-6 flex flex-col gap-3">

          <span className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#C17F5F] shadow-md">
            {recipe.category}
          </span>

          <span className="rounded-full bg-[#7A9E7E] px-6 py-2 text-sm font-semibold text-white">
            {recipe.diet}
          </span>

        </div>

        {/* Bookmark */}

        <button className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105">

          <Bookmark size={22} />

        </button>

        {/* Saves */}

        <div className="absolute bottom-6 left-6 rounded-[22px] bg-black/45 px-5 py-3 text-white backdrop-blur-md">

          <div className="flex items-center gap-2">

            <Heart size={16} fill="white" />

            <span className="text-lg font-semibold">
              2,148 Saves
            </span>

          </div>

          <p className="mt-1 text-sm text-white/80">
            Shared by 318 Home Cooks
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div>

        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#B88967]">
          Recipe • {recipe.category}
        </p>

        <h1
          className="
            font-[var(--font-cormorant)]
            text-[34px]
            lg:text-[42px]
            leading-tight
            tracking-[-0.03em]
            text-[#3D2B1F]
          "
        >
          {recipe.recipe_name}
        </h1>

        <p
          style={{ fontFamily: "var(--font-allura)" }}
          className="mt-3 text-[30px] text-[#C17F5F]"
        >
          {recipe.recipe_owner}
        </p>

        {/* Premium Panel */}

        <div className="mt-5 flex h-[430px] flex-col rounded-[30px] border border-[#E8DDD0] bg-[#FCF8F3] p-6 shadow-sm">

          {/* Author */}

          <div className="rounded-[22px] border border-[#EEE2D6] bg-white p-5">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A6B89A] text-xl font-bold text-white">

                {recipe.author_name?.charAt(0).toUpperCase()}

              </div>

              <div className="flex-1">

                <div className="flex items-center gap-3">

                  <h3 className="text-xl font-semibold text-[#3D2B1F]">
                    {recipe.author_name}
                  </h3>

                  <span className="rounded-full bg-[#C17F5F] px-3 py-1 text-xs font-medium text-white">
                    {recipe.generation}
                  </span>

                </div>

                <div className="mt-2 flex items-center gap-5 text-sm text-[#6D5B4D]">

                  <span className="flex items-center gap-2">

                    <MapPin size={15} />

                    {recipe.city}

                  </span>

                  <span>Shared March 2024</span>

                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[#C17F5F]">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="currentColor"
                    />
                  ))}

                  <span className="ml-2 text-sm text-[#5D4C3F]">
                    4.97 • 318 Reviews
                  </span>

                </div>

              </div>

            </div>

          </div>

                    {/* Family Memory */}

          <div className="mt-5 rounded-[22px] border border-[#EEE2D6] bg-white p-5">

            <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-[#B88967]">
              Family Memory
            </p>

            <p className="text-[15px] leading-8 text-[#4F4034]">
              {recipe.story}
            </p>

          </div>

          {/* Footer */}

          <div className="mt-auto flex items-center justify-between pt-5">

            <div className="flex items-center gap-2">

              <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#B88967]">
                Shared with
              </span>

              <span className="text-lg">❤️</span>

            </div>

            <div className="flex items-center gap-2">

              <button
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[#E8DDD0]
                  bg-white
                  text-[#6A5242]
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-[#C17F5F]
                  hover:bg-[#FFF8F2]
                  hover:text-[#C17F5F]
                "
              >
                <Bookmark size={18} />
              </button>

              <button
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[#E8DDD0]
                  bg-white
                  text-[#6A5242]
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-[#C17F5F]
                  hover:bg-[#FFF8F2]
                  hover:text-[#C17F5F]
                "
              >
                <Share2 size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}