interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-5 uppercase tracking-[6px] text-sm text-[#7A9E7E]">
          {eyebrow}
        </p>

        <h2 className="font-[var(--font-playfair)] text-5xl leading-tight text-[#3D2B1F] md:text-6xl">
          {title}{" "}
          <span className="text-[#C17F5F]">{highlight}</span>
        </h2>
      </div>

      <button className="text-lg font-medium text-[#C17F5F] transition hover:translate-x-2">
        Browse all recipes →
      </button>
    </div>
  );
}