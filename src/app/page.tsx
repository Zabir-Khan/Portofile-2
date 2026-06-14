import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Achievements from "@/components/sections/Achievements";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink text-warm">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Portfolio />
      <Services />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
