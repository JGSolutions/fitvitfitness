/** @type {import('next').NextConfig} */

const nextConfig = {
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/blog': { page: '/blog' },
  //   }
  // },
  distDir: 'out',
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  experimental:{appDir: true},
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
