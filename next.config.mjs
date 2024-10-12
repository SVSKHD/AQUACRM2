/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/admin/crm",
  images: {
    domains: ["res.cloudinary.com"],
  },

  env: {
    url: "https://api.aquakart.co.in",
  },
};

export default nextConfig;
