import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealSection from "@/components/ui/RevealSection";
import PortfolioPhoto from "@/components/ui/PortfolioPhoto";
import { BLOG_POSTS } from "@/data/blog";
import { formatDate } from "@/lib/formatDate";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Blog — ${SITE.name}`,
  description:
    "Thoughts and stories from Zabir Khan on travel, documentary work, and natural light photography.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main className="min-h-screen bg-cream pt-[72px] text-ink">
      <Navbar />

      <RevealSection className="px-5 py-16 sm:px-8 md:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="section-label">My Thoughts &amp; Stories</p>
          <h1 className="mb-12 font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] text-ink">
            From the
            <br />
            <em className="font-display italic text-gold">Journal.</em>
          </h1>

          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-16 grid grid-cols-1 gap-8 no-underline lg:grid-cols-2 lg:items-center lg:gap-12"
            >
              <PortfolioPhoto
                src={featured.image}
                seed={1}
                alt={featured.title}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] w-full"
              />
              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.12em] text-ink/40">
                  {formatDate(featured.date)} &middot; {featured.readTime}
                </div>
                <h2 className="mb-4 font-display text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-[15px] leading-[1.8] text-ink/60">{featured.excerpt}</p>
              </div>
            </Link>
          )}

          {/* Remaining posts grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group no-underline"
              >
                <PortfolioPhoto
                  src={post.image}
                  seed={post.slug.length}
                  alt={post.title}
                  className="aspect-[4/3] w-full"
                />
                <div className="mt-4 text-xs uppercase tracking-[0.12em] text-ink/40">
                  {formatDate(post.date)} &middot; {post.readTime}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-gold">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-ink/60">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      <Footer variant="light" />
    </main>
  );
}
