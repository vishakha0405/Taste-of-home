interface RecipeNoteCardProps {
  text: string;
}

export default function RecipeNoteCard({
  text,
}: RecipeNoteCardProps) {
  return (
    <div className="mb-6 break-inside-avoid rounded-[24px] border border-[#E6DDD2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <p className="mb-3 text-xs uppercase tracking-[3px] text-[#7A9E7E]">
        Recipe Note
      </p>

      <p className="leading-8 text-[#3D2B1F]">
        {text}
      </p>

    </div>
  );
}