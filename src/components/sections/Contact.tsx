"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
import RevealSection from "@/components/ui/RevealSection";
import { SITE, SOCIAL_LINKS } from "@/data/site";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormState {
  name: string;
  email: string;
  message: string;
}

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Phone, label: "Phone", value: SITE.phone },
  { icon: MapPin, label: "Location", value: SITE.location },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }
    if (!EMAIL_REGEX.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSent(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <RevealSection id="contact" className="px-5 py-24 sm:px-8 md:px-12 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <div>
          <p className="section-label">Contact</p>
          <h2 className="section-title mb-6">
            Let&apos;s create
            <br />
            <em className="font-display italic text-gold">something real.</em>
          </h2>
          <p className="mb-12 text-[15px] leading-[1.8] text-[#999999]">
            Whether you have a project in mind, need a quote, or just want to talk
            photography — I&apos;d love to hear from you.
          </p>

          {CONTACT_DETAILS.map((c) => (
            <div key={c.label} className="mb-7 flex items-start gap-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-ink-border text-gold">
                <c.icon size={18} aria-hidden="true" />
              </div>
              <div>
                <div className="mb-1 text-[11px] uppercase tracking-[0.1em] text-muted">
                  {c.label}
                </div>
                <div className="text-sm text-warm">{c.value}</div>
              </div>
            </div>
          ))}

          {/* Social */}
          <div className="mt-10 flex gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.abbr}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center border border-ink-border text-[11px] font-semibold tracking-[0.05em] text-muted no-underline transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                {s.abbr}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="success-card">
              <Check size={40} className="text-gold" aria-hidden="true" />
              <h3 className="font-display text-2xl text-warm">Message Sent</h3>
              <p className="text-sm leading-[1.7] text-muted">
                Thank you for reaching out. I&apos;ll be in touch within 24 hours.
              </p>
              <button className="btn-outline mt-4" onClick={() => setSent(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className="input-field"
                type="text"
                placeholder="Your Name"
                aria-label="Your name"
                value={form.name}
                onChange={update("name")}
              />
              <input
                className="input-field"
                type="email"
                placeholder="Email Address"
                aria-label="Email address"
                value={form.email}
                onChange={update("email")}
              />
              <input className="input-field" type="text" placeholder="Subject" aria-label="Subject" />
              <textarea
                className="input-field resize-y"
                placeholder="Tell me about your project…"
                aria-label="Your message"
                rows={6}
                value={form.message}
                onChange={update("message")}
              />
              {error && (
                <p role="alert" className="m-0 text-[13px] text-[#e0a070]">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="btn-primary mt-2 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send Message"}
                {!submitting && <ArrowRight size={16} aria-hidden="true" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </RevealSection>
  );
}
