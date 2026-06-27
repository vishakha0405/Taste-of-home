import Image from "next/image";

export default function Memory() {
  return (
    <section>

      {/* Heading */}
      <div className="mb-6">
        <p
          className="font-[var(--font-allura)] text-3xl text-[#C17F5F]"
        >
          a memory
        </p>

        <h2 className="mt-1 font-[var(--font-cormorant)] text-5xl font-semibold text-[#3D2B1F]">
          Family Story
        </h2>
      </div>

      <div className="overflow-hidden rounded-[30px] border border-[#E7DDD1] bg-white shadow-sm">

        <div className="grid lg:grid-cols-2">

          {/* Left Image */}
          <div className="relative min-h-[520px]">

            <Image
              src="/recipes/dal.jpg"
              alt="Grandmother"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white" />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-3 shadow-lg">

              <h3 className="font-semibold text-[#3D2B1F]">
                Kamla Devi
              </h3>

              <p className="text-sm text-[#8A7564]">
                Jaipur • Rajasthan
              </p>

            </div>

          </div>

          {/* Story */}
          <div className="flex items-center p-10">

            <div>

              <h3
                className="font-[var(--font-allura)] text-4xl text-[#C17F5F]"
              >
                Nani's kitchen, before sunrise
              </h3>

              <p className="mt-8 text-lg leading-9 text-[#6E5B4C]">
                Every winter Sunday, Nani would wake before sunrise and quietly
                start the dal on the lowest flame. By the time we came
                downstairs, the whole house smelled of slow-cooked lentils,
                cardamom tea and freshly made rotis.
              </p>

              <p className="mt-8 text-lg leading-9 italic text-[#7E6A5A]">
                She never measured anything. "Haath ka andaaz" was her secret.
                Watching her cook taught me that recipes are more than
                ingredients—they're memories passed from one generation to the
                next.
              </p>

              <div className="mt-10 border-l-4 border-[#C17F5F] pl-4">

                <h4 className="font-semibold text-[#3D2B1F]">
                  Shared by Vishakha Batham
                </h4>

                <p className="text-[#8A7564]">
                  Preserved with love • 2026
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}