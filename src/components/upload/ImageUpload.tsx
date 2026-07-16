"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  formData: {
    image: File | null;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  currentImage?: string;
};

export default function ImageUpload({
  formData,
  setFormData,
  currentImage,
}: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    setFormData((prev: any) => ({
      ...prev,
      image: file,
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#4A3428]">
        Recipe Cover Image{" "}
        <span className="text-red-500">*</span>
      </h2>

      <p className="text-sm text-[#7A6A5A]">
        {currentImage
          ? "Current cover image. Upload another one only if you want to replace it."
          : "A cover image is required for every recipe."}
      </p>

      <label className="relative flex h-72 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[#C57D56] bg-[#FFF8F3] transition hover:bg-[#FFF2EA]">
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full object-cover"
          />
        ) : currentImage ? (
          <Image
            src={currentImage}
            alt="Current Recipe"
            fill
            className="object-cover"
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

      {currentImage && (
        <p className="text-center text-sm text-[#8A6D5C]">
          Click the image to choose a new one.
        </p>
      )}
    </div>
  );
}