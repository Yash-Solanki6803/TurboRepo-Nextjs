/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //   With transpilePackages: ["ui"] we tell Next.js to
  //   bundle the files from certain packages it imports.
  transpilePackages: ["ui", "tailwindconfig"],
};

module.exports = nextConfig;
