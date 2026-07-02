interface MemoryQuoteCardProps {
  quote: string;
}

export default function MemoryQuoteCard({
  quote,
}: MemoryQuoteCardProps) {
  return (
    <div className="mb-6 break-inside-avoid rounded-[28px] bg-[#F7ECE5] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="mb-4 text-3xl text-[#C17F5F]">❝</p>

      <p className="font-[var(--font-playfair)] text-[24px] italic leading-10 text-[#3D2B1F]">
        {quote}
      </p>
    </div>
  );
}