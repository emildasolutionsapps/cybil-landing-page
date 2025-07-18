/** next.config.js (hard-coded) */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/landingpage',
  assetPrefix: '/landingpage',
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
