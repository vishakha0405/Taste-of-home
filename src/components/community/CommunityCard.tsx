import Image from "next/image";
import { Heart, Bookmark, Share2 } from "lucide-react";
import Link from "next/link";

type CommunityCardProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  category1: string;
  category2: string;
  author: string;
  likes: number;
};

export default function CommunityCard({
  id,
  image,
  title,
  description,
  category1,
  category2,
  author,
  likes,
}: CommunityCardProps) {
  return (
    <Link href={`/recipe/${id}`}>
      <article className="overflow-hidden rounded-[32px] border border-[#E9DED2] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">

        {/* Image */}
        <div className="relative h-[250px] w-full">

          <Image
            src={image || "/images/placeholder.jpg"}
            alt={title}
            fill
            className="object-cover"
          />

          {/* Categories */}
          <div className="absolute left-5 top-5 flex gap-2">

            <span className="rounded-full bg-white px-4 py-2 text-sm shadow">
              {category1}
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm shadow">
              {category2}
            </span>

          </div>

          {/* Bookmark */}
          <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow">
            <Bookmark size={20} />
          </button>

        </div>

        {/* Content */}
        <div className="space-y-3 p-6">

          <h3 className="font-[var(--font-playfair)] text-3xl text-[#3D2B1F]">
            {title}
          </h3>

          <p className="font-medium text-[#7B6A58]">
            By {author}
          </p>

          <p className="truncate text-[#6B5A4A]">
            {description}
          </p>

          <hr />

          <div className="flex items-center justify-between">

            <button className="flex items-center gap-2">
              <Heart size={20} />
              {likes}
            </button>

            <button className="flex items-center gap-2 text-[#6B5A4A]">
              <Share2 size={18} />
              Share
            </button>

          </div>

        </div>

      </article>
    </Link>
  );
}