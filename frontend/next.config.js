/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configured for Vercel deployment.
  // Removed 'output: export' so we can use dynamic Next.js Serverless API routes.
  // Removed github pages basePath as Vercel runs from root domain.
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
