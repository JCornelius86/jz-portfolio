import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The NinjaCop playable demo is a static Expo export co-hosted under
  // public/play/ninjacop (built with baseUrl "/play/ninjacop"). Serve its index
  // at the clean base path so expo-router resolves the "/" home route — loading
  // /index.html directly would leave the router on an unmatched route.
  async rewrites() {
    return [
      { source: "/play/ninjacop", destination: "/play/ninjacop/index.html" },
      { source: "/play/ninjacop/", destination: "/play/ninjacop/index.html" },
    ];
  },
};

export default nextConfig;
