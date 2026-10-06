/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my_portfolio_2',
  assetPrefix: '/my_portfolio_2/',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/my_portfolio_2',
  },
};

export default nextConfig;