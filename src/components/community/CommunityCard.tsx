import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

type CommunityCardProps = {
  variant?: "community" | "profile";

  id: number;
  image: string;
  title: string;
  description: string;
  generation: string;
  category1: string;
  category2: string;
  author: string;
  avatar: string;
  likes: string;
  comments: string;
  time: string;
};

export default function CommunityCard({
  variant = "community",
  id,
  image,
  title,
  description,
  generation,
  category1,
  category2,
  author,
  avatar,
  likes,
  comments,
  time,
}: CommunityCardProps) {
  return (
    <Link href={`/recipe/${id}`}>
      <article className="cursor-pointer overflow-hidden rounded-[32px] border border-[#E9DED2] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        {/* Image */}
        <div className="relative h-[220px] w-full">
          <Image
            src={image}
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

          {/* Top Right Action */}
          <button className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow">
            {variant === "community" ? (
              <Bookmark size={22} />
            ) : (
              <MoreHorizontal size={22} />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8AA08A]">
            {generation}
          </p>

          <h3 className="font-[var(--font-playfair)] text-2xl text-[#3D2B1F]">
            {title}
          </h3>

          {/* Description only on Community */}
          {variant === "community" && (
            <p className="leading-7 text-[#6B5A4A]">
              {description}
            </p>
          )}

          {/* Author only on Community */}
          {variant === "community" && (
            <>
              <hr />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7F9A7C] font-bold text-white">
                    {avatar}
                  </div>

                  <p className="font-medium">{author}</p>
                </div>

                <div className="flex items-center gap-2 text-[#7B6A58]">
                  <Clock size={18} />
                  {time}
                </div>
              </div>
            </>
          )}

          <hr />

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <span className="flex items-center gap-2">
                <Heart size={20} />
                {likes}
              </span>

              {variant === "community" && (
                <span className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  {comments}
                </span>
              )}
            </div>

            {variant === "community" ? (
              <button className="flex items-center gap-2 text-[#6B5A4A]">
                <Share2 size={18} />
                Share
              </button>
            ) : (
              <div className="flex items-center gap-2 text-sm text-[#7B6A58]">
                <Clock size={16} />
                {time}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}