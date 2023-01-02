/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        { hostname: 'd38ekezks43s3u.cloudfront.net'}
    ]
  }
}

module.exports = nextConfig
