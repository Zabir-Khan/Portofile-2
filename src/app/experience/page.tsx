import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsFull from "@/components/sections/StatsFull";
import AchievementsFull from "@/components/sections/AchievementsFull";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Experience & Achievements — ${SITE.name}`,
  description:
    "Zabir Khan's professional milestones — years of experience, group projects, international exhibitions, and client testimonials.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-ink pt-[72px] text-warm">
      <Navbar />

      {/* Page header */}
      <div className="px-5 py-16 text-center sm:px-8 md:px-12">
        <p className="section-label">Experience &amp; Achievements</p>
        <h1 className="section-title">
          Years of
          <br />
          <em className="font-display italic text-gold">Dedication.</em>
        </h1>
      </div>

      <StatsFull />
      <AchievementsFull />
      <Footer />
    </main>
  );
}
