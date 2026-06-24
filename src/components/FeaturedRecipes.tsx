import Image from "next/image";

const recipes = [
  {
    title: "Aloo Paratha",
    memory: "Sunday mornings with Mom ❤️",
    image: "/images/recipes/aloo-paratha.jpg",
  },
  {
    title: "Rajma Chawal",
    memory: "The ultimate comfort food 🍛",
    image: "/images/recipes/rajma-chawal.jpg",
  },
  {
    title: "Kheer",
    memory: "Every Diwali felt special ✨",
    image: "/images/recipes/kheer.jpg",
  },
];

export default function FeaturedRecipes() {
  return (
    <section className="bg-[#FFF8F0] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-[#4A3428] text-center mb-4">
          Family Favorites
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Recipes filled with love, memories, and tradition.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-52">
                <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
               /> 
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {recipe.title}
                </h3>
                <span className="inline-block bg-[#F8D7C4] text-[#4A3428] text-sm px-3 py-1 rounded-full mb-3">
                 Family Favorite ❤️
                </span>

                <p className="text-gray-600">
                  {recipe.memory}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}