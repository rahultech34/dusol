import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore
    agentUpgrade: "security",
  },
  serverExternalPackages: [
    "firebase-admin",
    "@google-cloud/firestore",
    "pdf-parse",
    "pdfjs-dist",
    "mammoth",
    "docx",
    "jspdf",
  ],
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
  async redirects() {
    return [
      {
        source: "/admission",
        destination: "/student-zone/admission",
        permanent: true,
      },
      {
        source: "/du-sol-admission",
        destination: "/student-zone/admission",
        permanent: true,
      },
      {
        source: "/du-sol-admission-2026",
        destination: "/student-zone/admission",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
