import Image from "next/image";
import { Heart } from "lucide-react";

export default function PhotoCard() {
  return (
    <div className="mb-8 break-inside-avoid overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative">
        <Image
        src="/recipes/paratha.jpg"
        alt="Community Recipe"
        width={600}
        height={700}
        className="w-full h-[420px] object-cover"
        />

        <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium">
          Community Favorite
        </div>
      </div>

      <div className="flex items-center justify-between p-6">
        <p className="font-[var(--font-playfair)] text-xl text-[#3D2B1F]">
          Fresh from Grandma's Kitchen
        </p>

        <div className="flex items-center gap-2 text-[#C17F5F]">
          <Heart size={18} />
          <span>2.4k</span>
        </div>
      </div>
    </div>
  );
}