import Image from "next/image";

interface PhotoCardProps {
  image: string;
}

export default function PhotoCard({
  image,
}: PhotoCardProps) {
  return (
    <div className="group mb-8 break-inside-avoid overflow-hidden rounded-[30px] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-[340px] w-full">
        <Image
          src={image}
          alt="Family memory"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}