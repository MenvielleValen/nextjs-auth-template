/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"],
    }
  };
  
  export default nextConfig;
  