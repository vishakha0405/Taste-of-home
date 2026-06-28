"use client";

import { useState } from "react";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([""]);

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const updateIngredient = (index: number, value: string) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const removeIngredient = (index: number) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Ingredients
      </h2>

      {ingredients.map((ingredient, index) => (
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
            className="rounded-xl bg-red-100 px-5 text-red-600 hover:bg-red-200"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addIngredient}
        className="rounded-xl border-2 border-dashed border-[#C57D56] px-6 py-3 text-[#C57D56] hover:bg-[#FFF3EC]"
      >
        + Add Ingredient
      </button>
    </div>
  );
}