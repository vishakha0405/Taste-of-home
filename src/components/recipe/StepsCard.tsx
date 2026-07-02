import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function StepsCard({ recipe }: Props) {
  recipe,
}: StepsCardProps) {
  const steps =
    recipe.steps
      ?.split("\n")
      .filter((step: string) => step.trim() !== "") || [];

  return (
    <section className="rounded-[32px] border border-[#E9DED2] bg-[#FDF9F4] p-8 shadow-sm">

      {/* Heading */}

      <h2 className="font-[var(--font-cormorant)] text-4xl text-[#3D2B1F]">
        How to Make
      </h2>

      <p className="mt-2 text-[#7B6A58]">
        Follow these family-tested steps.
      </p>

      {/* Steps */}

      <div className="mt-8 space-y-6">

        {steps.map((step: string, index: number) => (

          <div
            key={index}
            className="rounded-[24px] border border-[#E9DED2] bg-white p-6"
          >

            <div className="flex gap-5">

              {/* Step Number */}

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C17F5F] text-lg font-bold text-white">

                {index + 1}

              </div>

              {/* Step Content */}

              <div>

                <h3 className="mb-2 text-xl font-semibold text-[#3D2B1F]">
                  Step {index + 1}
                </h3>

                <p className="leading-8 text-[#4F4034]">
                  {step}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}