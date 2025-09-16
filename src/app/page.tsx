import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FavoriteSection from "@/components/FavoriteSection/FavoriteSection";
import Navbar from "@/components/Navbar/Navbar";
import SectionLive from "@/components/SectionLive/SectionLive";
import Slider from "@/components/Slider/Slider";
import Trend from "@/components/Trend/Trend";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <SectionLive />
      <Trend />
      <FavoriteSection />
      <DiscoverSection />
    </>
  );
}
