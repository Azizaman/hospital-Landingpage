/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true,
    domains: ["i.giphy.com", "images.unsplash.com"],


   },
};

module.exports = nextConfig;
