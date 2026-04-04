/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chopras.nl',
      },
    ],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      // Old flat URLs → new locale URLs
      { source: '/menu', destination: '/en/menu', permanent: true },
      { source: '/catering', destination: '/en/catering', permanent: true },
      { source: '/contact', destination: '/en/contact', permanent: true },
      { source: '/vacancy', destination: '/en/vacancy', permanent: true },
      { source: '/blog', destination: '/en/blog', permanent: true },
      { source: '/blog/:slug', destination: '/en/blog/:slug', permanent: true },
      { source: '/butter-chicken-den-haag', destination: '/en/butter-chicken-den-haag', permanent: true },
      { source: '/biryani-den-haag', destination: '/en/biryani-den-haag', permanent: true },
      { source: '/tandoori-den-haag', destination: '/en/tandoori-den-haag', permanent: true },
      { source: '/indian-takeaway-den-haag', destination: '/en/indian-takeaway-den-haag', permanent: true },
      { source: '/indian-buffet-den-haag', destination: '/en/indian-buffet-den-haag', permanent: true },
      { source: '/party-venue-den-haag', destination: '/en/party-venue-den-haag', permanent: true },
      { source: '/corporate-events-den-haag', destination: '/en/corporate-events-den-haag', permanent: true },
      { source: '/indian-wedding-catering-den-haag', destination: '/en/indian-wedding-catering-den-haag', permanent: true },
      { source: '/indian-food-netherlands', destination: '/en/indian-food-netherlands', permanent: true },
      { source: '/halal-food-den-haag', destination: '/en/halal-food-den-haag', permanent: true },
      { source: '/indian-restaurant-rijswijk', destination: '/en/indian-restaurant-rijswijk', permanent: true },
      { source: '/indian-restaurant-delft', destination: '/en/indian-restaurant-delft', permanent: true },
      { source: '/indian-restaurant-zoetermeer', destination: '/en/indian-restaurant-zoetermeer', permanent: true },
      { source: '/reservations', destination: '/en/contact', permanent: true },
      { source: '/reservations/', destination: '/en/contact', permanent: true },
      { source: '/event-space-den-haag', destination: '/en/catering', permanent: true },
      { source: '/event-space-den-haag/', destination: '/en/catering', permanent: true },
      { source: '/about-us', destination: '/en', permanent: true },
      { source: '/about-us/', destination: '/en', permanent: true },
    ]
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }]
  },
};

export default nextConfig;
