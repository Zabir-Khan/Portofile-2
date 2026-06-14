import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE.url}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/experience`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
