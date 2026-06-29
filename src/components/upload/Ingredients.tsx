type Props = {
  formData: {
    ingredients: string[];
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Ingredients({
  formData,
  setFormData,
}: Props) {
  const addIngredient = () => {
    setFormData((prev: any) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  };

  const updateIngredient = (index: number, value: string) => {
    const updated = [...formData.ingredients];
    updated[index] = value;

    setFormData((prev: any) => ({
      ...prev,
      ingredients: updated,
    }));
  };

  const removeIngredient = (index: number) => {
    const updated = formData.ingredients.filter(
      (_: string, i: number) => i !== index
    );

    setFormData((prev: any) => ({
      ...prev,
      ingredients: updated,
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Ingredients
      </h2>

      {formData.ingredients.map((ingredient, index) => (
        <div key={index} className="flex gap-3">
          <input
            type="text"
            value={ingredient}
            placeholder={`Ingredient ${index + 1}`}
            onChange={(e) =>
              updateIngredient(index, e.target.value)
            }
            className="flex-1 rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
          />

          <button
            type="button"
            onClick={() => removeIngredient(index)}
            className="rounded-xl bg-red-100 px-5 text-red-600"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addIngredient}
        className="rounded-xl border-2 border-dashed border-[#C57D56] px-6 py-3 text-[#C57D56]"
      >
        + Add Ingredient
      </button>
    </div>
  );
}