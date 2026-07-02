import Image from "next/image";

interface PhotoCardProps {
  image: string;
}

export default function PhotoCard({
  image,
}: PhotoCardProps) {
  return (
    <div className="group mb-8 break-inside-avoid overflow-hidden rounded-[30px] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <Image
  src="/images/community/family.jpg"
  alt="Family cooking"
  fill
  className="object-cover"
/>
    
    </div>
  );
}