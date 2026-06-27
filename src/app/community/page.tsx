import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CommunityHero from "@/components/community/CommunityHero";
import CommunityGrid from "@/components/community/CommunityGrid";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <CommunityHero />
      <CommunityGrid />
      <Footer />
    </>
  );
}