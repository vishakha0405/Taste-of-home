type Props = {
  formData: {
    prep_time: string;
    cook_time: string;
    servings: string;
    difficulty: string;
    category: string;
    diet: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function RecipeInfo({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Recipe Details
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Prep Time"
          value={formData.prep_time}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              prep_time: e.target.value,
            }))
          }
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />

        <input
          type="text"
          placeholder="Cook Time"
          value={formData.cook_time}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              cook_time: e.target.value,
            }))
          }
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Servings"
          value={formData.servings}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              servings: e.target.value,
            }))
          }
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />

        <select
          value={formData.difficulty}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              difficulty: e.target.value,
            }))
          }
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        >
          <option value="">Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              category: e.target.value,
            }))
          }
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        >
          <option value="">Category</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
          <option>Snack</option>
        </select>

        <select
          value={formData.diet}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              diet: e.target.value,
            }))
          }
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        >
          <option value="">Diet</option>
          <option>Vegetarian</option>
          <option>Non-Vegetarian</option>
          <option>Vegan</option>
        </select>
      </div>
    </div>
  );
}