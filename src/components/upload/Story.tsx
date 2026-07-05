type Props = {
  formData: {
    story: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const MAX_CHARACTERS = 600;

export default function Story({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[#4A3428]">
          Family Story
        </h2>

        <p className="mt-2 text-[#7A6A5A]">
          Share the memory behind this recipe in about 80–100 words.
        </p>
      </div>

      <div>
        <textarea
          rows={8}
          maxLength={MAX_CHARACTERS}
          value={formData.story}
          placeholder="Tell us what makes this recipe special. Maybe it's your grandmother's Sunday lunch, a festival tradition, or a family celebration..."
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              story: e.target.value,
            }))
          }
          className="w-full resize-none rounded-xl border border-[#E8DDD2] p-5 outline-none focus:border-[#C57D56]"
        />

        <div className="mt-2 flex justify-between text-sm">
          <p className="text-[#8A735E]">
            Keep it short and meaningful.
          </p>

          <span
            className={`${
              formData.story.length > 550
                ? "text-red-500"
                : "text-[#8A735E]"
            }`}
          >
            {formData.story.length}/{MAX_CHARACTERS}
          </span>
        </div>
      </div>
    </div>
  );
}