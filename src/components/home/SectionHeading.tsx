interface Props {
  subtitle: string;
  title: string;
  highlight?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  highlight,
}: Props) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[6px] text-[#7A9E7E] text-sm font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-5 text-5xl lg:text-6xl leading-tight font-[var(--font-playfair)] text-[#3D2B1F]">
        {title}

        {highlight && (
          <>
            <br />
            <span className="text-[#C17F5F]">
              {highlight}
            </span>
          </>
        )}
      </h2>
    </div>
  );
}