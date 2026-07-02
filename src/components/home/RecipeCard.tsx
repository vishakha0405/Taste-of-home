import Image from "next/image";
import Link from "next/link";

interface RecipeCardProps {
  image: string;
  title: string;
}

export default function RecipeCard({
  image,
  title,
}: RecipeCardProps) {
  return (
    <Link
      href="/recipes"
      className="group mb-8 block break-inside-avoid overflow-hidden rounded-[30px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={500}
          className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
          <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-white drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}