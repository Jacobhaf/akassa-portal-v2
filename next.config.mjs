/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/yrke/:slug',
                destination: '/yrken/:slug',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
