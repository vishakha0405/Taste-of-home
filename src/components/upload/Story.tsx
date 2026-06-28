export default function Story() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Family Story
      </h2>

      <p className="text-[#7A6A5A]">
        Tell us the memory behind this recipe.
      </p>

      <textarea
        rows={8}
        placeholder="Tell the story behind this recipe..."
        className="w-full rounded-xl border border-[#E8DDD2] p-5 resize-none outline-none"
      />
    </div>
  );
}