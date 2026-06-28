export default function Hero() {
  return (
    <section className="bg-[#FAF6F0] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative h-[520px] overflow-hidden rounded-[32px] shadow-xl">

          {/* Background */}
          <img
            src="/recipes/dal.jpg"
            alt="Recipe"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white">

            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#C57D56] px-4 py-2 text-sm font-medium">
                ❤ Family Recipe
              </span>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
                3rd Generation
              </span>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
                Jaipur, Rajasthan
              </span>
            </div>

            <h1 className="max-w-3xl text-6xl font-bold">
              Nani's Slow-Cooked
              <br />
              Dal Makhani
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/90">
              Preserved and shared by Priya Sharma from her grandmother's handwritten recipe.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}