/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['portfolio-image-store.s3.ap-south-1.amazonaws.com'],
},
};

export default nextConfig;
