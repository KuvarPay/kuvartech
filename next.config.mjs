/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Sanity serves transformed images from its own CDN.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },

  async redirects() {
    return [
      // /solutions split into /services and /work when the company stopped
      // positioning as a product business.
      { source: "/solutions", destination: "/services", permanent: true },
      // /press carried invented releases and coverage attributed to real
      // publications. Removed rather than rewritten.
      { source: "/press", destination: "/insights", permanent: true },
    ];
  },
};

export default nextConfig;
