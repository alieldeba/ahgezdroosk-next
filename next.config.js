/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["scontent.fcai19-1.fna.fbcdn.net"],
  },
  distDir: "dist",
};

module.exports = nextConfig;
