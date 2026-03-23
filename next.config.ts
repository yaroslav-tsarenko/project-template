import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,

    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
                    { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
                    // PCI-DSS compliant security headers
                    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "X-XSS-Protection", value: "1; mode=block" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
                    { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
                ],
            },
        ];
    },

    trailingSlash: false,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.freepik.com",
            },
            {
                protocol: "https",
                hostname: "media.shipster.se",
            },
        ],
    },

    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },

    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;