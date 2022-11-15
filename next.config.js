/** @type {import('next').NextConfig} */

const nextConfig = {
  // distDir: 'out',
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  // experimental:{appDir: true},
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
