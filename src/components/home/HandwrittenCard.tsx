interface HandwrittenCardProps {
  text: string;
}

export default function HandwrittenCard({
  text,
}: HandwrittenCardProps) {
  return (
    <div className="mb-6 break-inside-avoid rounded-[28px] bg-[#EEF4EC] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <p className="[font-family:var(--font-allura)] text-[46px] leading-[1.3] text-[#5B7558]">
        {text}
      </p>

    </div>
  );
}