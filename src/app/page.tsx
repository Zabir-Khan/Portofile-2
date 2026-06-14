import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ExperiencePreview from "@/components/sections/ExperiencePreview";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutPreview />
      <PortfolioPreview />
      <ExperiencePreview />
      <Testimonials />
      <ContactCTA />
      <Footer variant="light" />
    </main>
  );
}
