import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Without this, Turbopack walks up to ~/package-lock.json and picks the
  // home directory as the project root.
  turbopack: { root: __dirname },
};

export default nextConfig;
