interface MemoryCardProps {
  quote: string;
}

const colors = [
  "bg-[#E8F0E6]",
  "bg-[#F7E6DC]",
  "bg-[#F2EEE5]",
  "bg-[#EFE7F5]",
  "bg-[#F5EFD8]",
];

export default function MemoryCard({
  quote,
}: MemoryCardProps) {
  const color =
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`group mb-6 break-inside-avoid rounded-[24px] ${color} p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
    >
      <div className="mb-6 text-3xl leading-none text-[#C17F5F]">
        “
      </div>

      <p className="font-[var(--font-playfair)] text-[28px] leading-8 text-[#3D2B1F] italic">
        {quote}
      </p>
    </div>
  );
}