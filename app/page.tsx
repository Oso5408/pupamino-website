import HeroSection from "@/components/sections/HeroSection";
import PromiseSection from "@/components/sections/PromiseSection";
import ProductsSection from "@/components/sections/ProductsSection";
import BlueprintSection from "@/components/sections/BlueprintSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PromiseSection />
      <ProductsSection />
      <BlueprintSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
