import CommunityCard from "./CommunityCard";
import CategoryTabs from "./CategoryTabs";
import { communityRecipes } from "@/data/communityData";

export default function CommunityGrid() {
  return (
    <>
      <CategoryTabs />

      <section className="bg-[#FAF6F0] py-16">
        <div className="mx-auto max-w-7xl px-6">

          {/* Small Heading */}

          <div className="mb-12">

            <div className="flex items-center gap-3">

              <span className="h-3 w-3 rounded-full bg-[#C17F5F]" />
              <span className="h-3 w-3 rounded-full bg-[#E5D7C8]" />
              <span className="h-3 w-3 rounded-full bg-[#A6B89A]" />

              <p className="ml-3 text-2xl text-[#7B6A58]">
                Showing {communityRecipes.length} stories from our community
              </p>

              <div className="h-px flex-1 bg-[#E9DED2]" />

            </div>

          </div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {communityRecipes.map((recipe) => (

              <CommunityCard
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                description={recipe.description}
                generation={recipe.generation}
                category1={recipe.category1}
                category2={recipe.category2}
                author={recipe.author}
                avatar={recipe.avatar}
                likes={recipe.likes}
                comments={recipe.comments}
                time={recipe.time}
              />

            ))}

          </div>

        </div>
      </section>
    </>
  );
}