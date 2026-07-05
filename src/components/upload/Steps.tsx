type Props = {
  formData: {
    steps: string[];
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Steps({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[#4A3428]">
          Cooking Steps
        </h2>

        <p className="mt-2 text-[#7B6A58]">
          Enter one cooking step per line.
        </p>
      </div>

      <textarea
        rows={14}
        value={formData.steps.join("\n")}
        onChange={(e) =>
          setFormData((prev: any) => ({
            ...prev,
            steps: e.target.value.split("\n"),
          }))
        }
        placeholder={`Prepare all the ingredients.
Heat oil in a pan.
Add onions and sauté until golden.
Add spices and cook for 2 minutes.
Serve hot with rice.`}
        className="w-full resize-none rounded-2xl border border-[#E8DDD2] p-5 text-[#4A3428] outline-none transition focus:border-[#C57D56]"
      />
    </div>
  );
}