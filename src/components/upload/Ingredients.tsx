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
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[#4A3428]">
          Ingredients
        </h2>

        <p className="mt-2 text-[#7B6A58]">
          Enter one ingredient per line.
        </p>
      </div>

      <textarea
        rows={12}
        value={formData.ingredients.join("\n")}
        onChange={(e) =>
          setFormData((prev: any) => ({
            ...prev,
            ingredients: e.target.value.split("\n"),
          }))
        }
        placeholder={`250 g paneer
1 onion, finely chopped
2 tomatoes
1 tsp cumin seeds
1 tbsp oil
Salt to taste`}
        className="w-full resize-none rounded-2xl border border-[#E8DDD2] p-5 text-[#4A3428] outline-none transition focus:border-[#C57D56]"
      />
    </div>
  );
}