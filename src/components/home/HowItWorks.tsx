import { BookOpen, Heart, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Write the Recipe",
    description:
      "Capture ingredients, steps and little family secrets that make every dish unique.",
    color: "#C17F5F",
  },
  {
    number: "02",
    icon: Heart,
    title: "Attach the Memory",
    description:
      "Tell the story behind the recipe. Who made it? When? Why is it special?",
    color: "#7A9E7E",
  },
  {
    number: "03",
    icon: Users,
    title: "Preserve Forever",
    description:
      "Keep your family's traditions alive so future generations can enjoy them too.",
    color: "#3D2B1F",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FAF6F0] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm uppercase tracking-[6px] text-[#7A9E7E]">
          HOW IT WORKS
        </p>

        <h2 className="mt-2 text-center font-[var(--font-playfair)] text-4xl leading-tight text-[#3D2B1F] lg:text-5xl">
          Three steps to preserve
          <br />
          <span className="text-[#C17F5F]">
            what matters most
          </span>
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative min-h-[320px] rounded-[28px] border border-[#EFE3D8] bg-gradient-to-b from-[#FFFDF9] to-[#FCF6EF] p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="pointer-events-none absolute right-8 top-8 select-none font-[var(--font-playfair)] text-[90px] text-[#F3ECE3]">
                  {step.number}
                </span>

                <div
                  className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <Icon size={24} color={step.color} />
                </div>

                <h3 className="mb-5 font-[var(--font-playfair)] text-3xl leading-tight text-[#3D2B1F]">
                  {step.title}
                </h3>

                <p className="text-base leading-7 text-[#6B5A4A]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}