import { Heart } from "lucide-react";

export default function MemoryCard() {
  return (
    <div className="mb-8 break-inside-avoid overflow-hidden rounded-[32px] bg-[#8DAA84] p-10 text-white relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Heart */}
      <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
        <Heart size={24} fill="white" />
      </div>

      {/* Quote */}
      <p className="font-[var(--font-playfair)] text-[42px] absolute right-8 top-6 opacity-15">
        ❞
      </p>

      {/* Text */}
      <p className="font-[var(--font-playfair)] text-[22px] leading-[1.8]">
        "She never used a recipe card. Everything was in her hands, her eyes,
        her memory. I started writing it all down the summer I knew she was
        forgetting."
      </p>

      {/* Author */}
      <div className="mt-20">
        <h4 className="text-2xl font-semibold">
          Priya Mehta
        </h4>

        <p className="mt-2 text-white/80 text-lg">
          Mumbai → Toronto
        </p>
      </div>

      {/* Decorative circle */}
      <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/10" />

    </div>
  );
}