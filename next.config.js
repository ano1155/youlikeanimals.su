/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/link/:path",
        destination: "/link/:path",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/link/:path",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=60000, stale-while-revalidate=60000",
          },
        ],
      },
      {
        source: "/(.*?)",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=60000, stale-while-revalidate=60000",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
