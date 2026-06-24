import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import MemoryWall from "@/components/MemoryWall";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedRecipes />
      <MemoryWall />

    </>
  );
}