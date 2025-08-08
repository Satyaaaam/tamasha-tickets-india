import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EventCategories } from "@/components/EventCategories";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EventCategories />
      <FeaturedEvents />
      <Footer />
    </div>
  );
};

export default Index;
