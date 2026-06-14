import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFull from "@/components/sections/ContactFull";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact — ${SITE.name}`,
  description:
    "Get in touch with Zabir Khan for photography bookings, collaborations, and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream pt-[72px] text-ink">
      <Navbar />
      <ContactFull />
      <Footer variant="light" />
    </main>
  );
}
