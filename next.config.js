/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: async () => {
    return [{source: '/', headers: [{key: 'X-Content-Type-Options', value: 'nosniff'}, {key: 'content-type', value: 'application/custom'}]}];
  }
}

module.exports = nextConfig
