/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, options) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    config.resolve.alias.canvas = false

    return config
  },
}

module.exports = nextConfig
