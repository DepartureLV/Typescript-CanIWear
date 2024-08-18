/** @type {import('next').NextConfig} */
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
