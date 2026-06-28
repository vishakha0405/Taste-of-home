export default function RecipeInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Recipe Details
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Prep Time"
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />

        <input
          type="text"
          placeholder="Cook Time"
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Servings"
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />

        <select className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]">
          <option>Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]">
          <option>Category</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
          <option>Snack</option>
        </select>

        <select className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]">
          <option>Diet</option>
          <option>Vegetarian</option>
          <option>Non-Vegetarian</option>
          <option>Vegan</option>
        </select>
      </div>
    </div>
  );
}