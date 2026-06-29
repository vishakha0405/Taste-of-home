type Props = {
  formData: {
    story: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Story({
  formData,
  setFormData,
}: Props) {
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
        value={formData.story}
        placeholder="Tell the story behind this recipe..."
        onChange={(e) =>
          setFormData((prev: any) => ({
            ...prev,
            story: e.target.value,
          }))
        }
        className="w-full resize-none rounded-xl border border-[#E8DDD2] p-5 outline-none"
      />
    </div>
  );
}