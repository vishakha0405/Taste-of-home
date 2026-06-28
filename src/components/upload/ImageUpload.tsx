"use client";

import { useState } from "react";

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Recipe Cover Image
      </h2>

      <label className="flex h-72 cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-[#C57D56] bg-[#FFF8F3] transition hover:bg-[#FFF2EA]">

        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <div className="text-center">
            <p className="text-xl font-semibold text-[#C57D56]">
              📷 Upload Cover Photo
            </p>

            <p className="mt-2 text-[#8A6D5C]">
              JPG, PNG or WEBP
            </p>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="hidden"
        />
      </label>
    </div>
  );
}