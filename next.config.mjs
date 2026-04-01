/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chopras.nl',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
