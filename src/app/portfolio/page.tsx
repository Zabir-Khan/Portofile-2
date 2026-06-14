import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/sections/Portfolio";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Portfolio — ${SITE.name}`,
  description:
    "Browse Zabir Khan's photography portfolio — portrait, travel, documentary, events, landscape, and street photography.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-ink pt-[72px] text-warm">
      <Navbar />
      <Portfolio />
      <Footer />
    </main>
  );
}
