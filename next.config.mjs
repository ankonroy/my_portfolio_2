/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my_portfolio_2',
  assetPrefix: '/my_portfolio_2/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;