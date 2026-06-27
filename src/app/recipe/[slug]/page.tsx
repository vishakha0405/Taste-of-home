import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Hero from "@/components/recipe/Hero";
import Memory from "@/components/recipe/Memory";
import Ingredients from "@/components/recipe/Ingredients";
import Recipe from "@/components/recipe/Recipe";
import Sidebar from "@/components/recipe/Sidebar";
import RelatedRecipes from "@/components/recipe/RelatedRecipes";

export default function RecipePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF6F0]">

        {/* Hero */}
        <Hero />

        {/* Main Content */}
        <section className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-12">

              <Memory />

              <Ingredients />

              <Recipe />

            </div>

            {/* RIGHT */}
            <div className="space-y-8">

              <Sidebar />

            </div>

          </div>

          {/* Related Recipes */}
          <div className="mt-20">
            <RelatedRecipes />
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}