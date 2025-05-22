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
  images: {
    unoptimized: true,
    remotePatterns: [],
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  assetPrefix: '/meet-my-brother/',
}

export default nextConfig
