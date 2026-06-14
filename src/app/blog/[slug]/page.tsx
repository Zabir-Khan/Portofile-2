import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealSection from "@/components/ui/RevealSection";
import PortfolioPhoto from "@/components/ui/PortfolioPhoto";
import { BLOG_POSTS } from "@/data/blog";
import { formatDate } from "@/lib/formatDate";
import { SITE } from "@/data/site";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — ${SITE.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream pt-[72px] text-ink">
      <Navbar />

      <RevealSection className="px-5 py-16 sm:px-8 md:px-12 lg:py-24">
        <article className="mx-auto max-w-[760px]">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-ink/50 no-underline hover:text-gold"
          >
            <ArrowLeft size={14} aria-hidden="true" /> Back to Blog
          </Link>

          <div className="mb-3 text-xs uppercase tracking-[0.12em] text-ink/40">
            {formatDate(post.date)} &middot; {post.readTime}
          </div>

          <h1 className="mb-8 font-display text-[clamp(28px,5vw,48px)] font-bold leading-[1.15] text-ink">
            {post.title}
          </h1>

          <PortfolioPhoto
            src={post.image}
            seed={post.slug.length}
            alt={post.title}
            sizes="760px"
            className="mb-10 aspect-[16/9] w-full"
          />

          <div className="flex flex-col gap-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-[16px] leading-[1.9] text-ink/75">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </RevealSection>

      <Footer variant="light" />
    </main>
  );
}
