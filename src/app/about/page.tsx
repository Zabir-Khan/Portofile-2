import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutFull from "@/components/sections/AboutFull";
import Services from "@/components/sections/Services";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `About — ${SITE.name}`,
  description:
    "Learn about Zabir Khan's background, skills, career timeline, and the services he offers as a professional photographer.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />
      <AboutFull />
      <Services />
      <Footer />
    </main>
  );
}
