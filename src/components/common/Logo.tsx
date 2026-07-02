import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
  href="/"
  className="flex items-center transition-opacity duration-300 hover:opacity-90"
     >
      {/* Bowl Icon */}
      <Image
        src="/logo/bowl.png"
        alt="Taste of Home"
        width={200}
        height={200}
        priority
        className="object-contain"
      />

      {/* Logo Text */}
      <div className="-ml-13 flex flex-col justify-center">
  <h2 className="font-[var(--font-playfair)] text-[18px] font-semibold uppercase tracking-[0.16em] text-[#3D2B1F]">
    TASTE OF
  </h2>

  <h1 className="[font-family:var(--font-allura)] -mt-2 text-[46px] leading-none text-[#C17F5F]">
    Home
  </h1>
</div>
    </Link>
  );
}