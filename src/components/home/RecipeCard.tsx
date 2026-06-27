import Image from "next/image";
import {
  Bookmark,
  Heart,
  MessageCircle,
  Clock,
  Share2,
} from "lucide-react";

interface RecipeCardProps {
  image: string;
  title: string;
  story: string;
  author: string;
  avatar: string;
  tags: string[];
  generation: string;
  likes: string;
  comments: string;
  time: string;
}

export default function RecipeCard({
  image,
  title,
  story,
  author,
  avatar,
  tags,
  generation,
  likes,
  comments,
  time,
}: RecipeCardProps) {
  return (
    <div className="mb-8 break-inside-avoid overflow-hidden rounded-[32px] border border-[#EFE3D8] bg-[#FFFBF7] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={450}
          className="h-[300px] w-full object-cover"
        />

        <button className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow">
          <Bookmark size={20} />
        </button>

        <div className="absolute left-5 top-5 flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white px-4 py-2 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">

        <p className="mb-4 text-sm uppercase tracking-[2px] text-[#7A9E7E]">
          {generation}
        </p>

        <h3 className="font-[var(--font-playfair)] text-[42px] leading-tight text-[#3D2B1F]">
          {title}
        </h3>

        <p className="mt-5 text-lg leading-9 text-[#6B5A4A]">
          {story}
        </p>

        <div className="my-8 border-t border-[#E8DDD2]" />

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A9E7E] font-semibold text-white">
              {avatar}
            </div>

            <span className="text-lg text-[#3D2B1F]">
              {author}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#7B6D60]">
            <Clock size={18} />
            {time}
          </div>

        </div>

        <div className="mt-7 flex items-center justify-between">

          <div className="flex gap-6">

            <div className="flex items-center gap-2">
              <Heart size={18} />
              {likes}
            </div>

            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              {comments}
            </div>

          </div>

          <button className="flex items-center gap-2">
            <Share2 size={18} />
            Share
          </button>

        </div>

      </div>

    </div>
  );
}