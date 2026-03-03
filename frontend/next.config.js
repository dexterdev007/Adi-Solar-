/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configured for Vercel deployment.
  // Added output: 'export' to support building for GitHub Pages
  output: 'export',
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
