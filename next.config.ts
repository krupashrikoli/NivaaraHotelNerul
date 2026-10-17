import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/experiences",
        destination: "/city-attractions",
        permanent: true,
      },
      {
        source: "/experiences/:slug",
        destination: "/city-attractions/:slug",
        permanent: true,
      },
      {
        source: "/rooms/nivaara-room",
        destination: "/rooms/luxury-studio",
        permanent: true,
      },
      {
        source: "/rooms/mountain-view",
        destination: "/rooms/luxury-valley-room",
        permanent: true,
      },
      {
        source: "/rooms/sea-view",
        destination: "/rooms/luxury-palms-room",
        permanent: true,
      },
      {
        source: "/nivaara",
        destination: "/",
        permanent: true,
      },
      {
        source: "/nivaara/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85, 92, 100],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
};

export default nextConfig;
