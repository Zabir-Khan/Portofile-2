import { SITE, SOCIAL_LINKS } from "@/data/site";

/**
 * Injects JSON-LD structured data describing Zabir Khan as a Person /
 * ProfessionalService, to improve rich-result eligibility in search.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: SOCIAL_LINKS.filter((s) => s.href !== "#").map((s) => s.href),
    founder: {
      "@type": "Person",
      name: SITE.name,
      jobTitle: SITE.title,
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
