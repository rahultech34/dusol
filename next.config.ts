import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pdf-parse", "pdfjs-dist", "mammoth", "docx", "jspdf"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edukyu.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
