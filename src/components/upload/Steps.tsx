"use client";

import { useState } from "react";

export default function Steps() {
  const [steps, setSteps] = useState([""]);

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const updateStep = (index: number, value: string) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  const removeStep = (index: number) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Cooking Steps
      </h2>

      {steps.map((step, index) => (
        <div
          key={index}
          className="rounded-2xl border border-[#E8DDD2] p-5"
        >
          <label className="mb-3 block font-semibold text-[#4A3428]">
            Step {index + 1}
          </label>

          <textarea
            rows={4}
            value={step}
            placeholder="Describe this cooking step..."
            onChange={(e) => updateStep(index, e.target.value)}
            className="w-full resize-none rounded-xl border border-[#E8DDD2] p-4 outline-none focus:border-[#C57D56]"
          />

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => removeStep(index)}
              className="rounded-xl bg-red-100 px-4 py-2 text-red-600 hover:bg-red-200"
            >
              Remove Step
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addStep}
        className="rounded-xl border-2 border-dashed border-[#C57D56] px-6 py-3 text-[#C57D56] hover:bg-[#FFF3EC]"
      >
        + Add Step
      </button>
    </div>
  );
}