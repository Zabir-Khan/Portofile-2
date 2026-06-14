// Central place for site identity, contact details, and navigation.
// Replace placeholder values here when real information is available.

export const SITE = {
  name: "Zabir Khan",
  title: "Professional Photographer",
  tagline:
    "Storyteller. Visual artist. I capture moments that resist forgetting — the raw, the fleeting, the real.",
  email: "hellozabirkhan@gmail.com",
  phone: "+91 98765 43210",
  location: "India — Available Worldwide",
  url: "https://zabirkhan.example.com", // update with real domain before deploy
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", abbr: "In", href: "#" },
  { label: "Behance", abbr: "Be", href: "#" },
  { label: "Instagram", abbr: "IG", href: "#" },
  { label: "YouTube", abbr: "YT", href: "#" },
] as const;
