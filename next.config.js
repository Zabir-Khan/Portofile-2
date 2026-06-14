/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Unsplash — used for placeholder/stock photography until Zabir's
      // real photos are hosted. Free for commercial use, no attribution
      // required (https://unsplash.com/license).
      { protocol: "https", hostname: "images.unsplash.com" },
      // Add real image hosts here once Zabir's own photography is hosted
      // { protocol: "https", hostname: "images.example.com" },
    ],
  },
};

module.exports = nextConfig;
