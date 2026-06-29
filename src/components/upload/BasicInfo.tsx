type Props = {
  formData: {
    recipe_name: string;
    author_name: string;
    recipe_owner: string;
    generation: string;
    city: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function BasicInfo({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Basic Information
      </h2>

      <input
        type="text"
        placeholder="Recipe Name"
        value={formData.recipe_name}
        onChange={(e) =>
          setFormData((prev: any) => ({
            ...prev,
            recipe_name: e.target.value,
          }))
        }
        className="w-full rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
      />

      <input
        type="text"
        placeholder="Your Name"
        value={formData.author_name}
        onChange={(e) =>
          setFormData((prev: any) => ({
            ...prev,
            author_name: e.target.value,
          }))
        }
        className="w-full rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
      />

      <input
        type="text"
        placeholder="Whose recipe is this? (Mother, Grandmother...)"
        value={formData.recipe_owner}
        onChange={(e) =>
          setFormData((prev: any) => ({
            ...prev,
            recipe_owner: e.target.value,
          }))
        }
        className="w-full rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Generation"
          value={formData.generation}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              generation: e.target.value,
            }))
          }
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />

        <input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              city: e.target.value,
            }))
          }
          className="rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
        />
      </div>
    </div>
  );
}