interface StickyNoteCardProps {
  text: string;
}

export default function StickyNoteCard({
  text,
}: StickyNoteCardProps) {
  return (
    <div className="mb-6 break-inside-avoid rotate-2 rounded-[18px] bg-[#F6EFBF] p-6 shadow-md transition duration-300 hover:rotate-0 hover:shadow-xl">

      <div className="mb-4 text-xl">♡</div>

      <p className="leading-8 text-[#4E3B2C]">
        {text}
      </p>

    </div>
  );
}