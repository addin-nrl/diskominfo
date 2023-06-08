/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "serangkota.go.id",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.instagram.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
