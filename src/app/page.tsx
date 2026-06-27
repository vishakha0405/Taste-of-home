import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import QuoteSection from "@/components/home/QuoteSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/common/Footer";


export default function Home() {
  return (
    <main className="bg-[#FAF6F0]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedRecipes />
      <QuoteSection />
      <CTASection />
      <Footer />
    </main>
  );
}