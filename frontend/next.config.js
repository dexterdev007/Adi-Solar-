/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configured for Vercel deployment.
  // Added output: 'export' to support building for GitHub Pages
  output: 'export',
  // Added basePath to fix asset loading on GitHub Pages subdirectory
  basePath: '/Adi-Solar-',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Adi-Solar-',
  },
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
