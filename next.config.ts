import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // `images.domains` is deprecated in Next 16; remotePatterns replaces it.
    remotePatterns: [
      // Profile photo
      { protocol: "https", hostname: "caerngsicqdfqubm.public.blob.vercel-storage.com" },
      // Behance thumbnails in Explorations
      { protocol: "https", hostname: "mir-s3-cdn-cf.behance.net" },
    ],
  },
};

export default nextConfig;
