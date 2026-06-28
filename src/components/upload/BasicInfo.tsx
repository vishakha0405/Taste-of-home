export default function BasicInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Basic Information
      </h2>

      <input
        type="text"
        placeholder="Recipe Name"
        className="w-full rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
      />

      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
      />

      <input
        type="text"
        placeholder="Whose recipe is this? (Mother, Grandmother...)"
        className="w-full rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Generation (1st, 2nd...)"
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />

        <input
          type="text"
          placeholder="City"
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />
      </div>
    </div>
  );
}