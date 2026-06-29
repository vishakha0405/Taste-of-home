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
  const addStep = () => {
    setFormData((prev: any) => ({
      ...prev,
      steps: [...prev.steps, ""],
    }));
  };

  const updateStep = (index: number, value: string) => {
    const updated = [...formData.steps];
    updated[index] = value;

    setFormData((prev: any) => ({
      ...prev,
      steps: updated,
    }));
  };

  const removeStep = (index: number) => {
    const updated = formData.steps.filter(
      (_: string, i: number) => i !== index
    );

    setFormData((prev: any) => ({
      ...prev,
      steps: updated,
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Cooking Steps
      </h2>

      {formData.steps.map((step, index) => (
        <div
          key={index}
          className="rounded-2xl border border-[#E8DDD2] p-5"
        >
          <label className="mb-3 block font-semibold">
            Step {index + 1}
          </label>

          <textarea
            rows={4}
            value={step}
            placeholder="Describe this cooking step..."
            onChange={(e) =>
              updateStep(index, e.target.value)
            }
            className="w-full resize-none rounded-xl border border-[#E8DDD2] p-4"
          />

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => removeStep(index)}
              className="rounded-xl bg-red-100 px-4 py-2 text-red-600"
            >
              Remove Step
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addStep}
        className="rounded-xl border-2 border-dashed border-[#C57D56] px-6 py-3 text-[#C57D56]"
      >
        + Add Step
      </button>
    </div>
  );
}