/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/meet-my-brother',
  assetPrefix: '/meet-my-brother/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
