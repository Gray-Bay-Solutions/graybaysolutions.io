import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        // You can add port and pathname if necessary, but for placehold.co, hostname is enough.
      },
      // You can add other domains here if needed in the future, for example for picsum.photos:
      // {
      //   protocol: "https",
      //   hostname: "picsum.photos",
      // },
    ],
  },
};

export default nextConfig;
