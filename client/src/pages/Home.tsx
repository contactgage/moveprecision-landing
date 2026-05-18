/*
 * MovePrecision Landing Page — Home
 * Design: "Precision in Motion" — Deep navy + gold, glassmorphism, scroll-triggered reveals
 * Sections: Navbar → Hero → Stats Ticker → Pain Points → Features → AI Inventory → Feature Grid → Compare → Testimonials → Pricing → Demo CTA → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import StatsTicker from "@/components/StatsTicker";
import PainPoints from "@/components/PainPoints";
import FeaturesSection from "@/components/FeaturesSection";
import AIInventorySection from "@/components/AIInventorySection";
import FeatureGrid from "@/components/FeatureGrid";
import CompareSection from "@/components/CompareSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import DemoCTA from "@/components/DemoCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0A0E1A" }}>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <StatsTicker />
      <PainPoints />
      <FeaturesSection />
      <AIInventorySection />
      <FeatureGrid />
      <CompareSection />
      <TestimonialsSection />
      <PricingSection />
      <DemoCTA />
      <Footer />
    </div>
  );
}
