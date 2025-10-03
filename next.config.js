
// next.config.js
module.exports = {
  experimental: {
    turbopack: {
      root: './', // Adjust this path
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https'
        ,hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ],
  },
};
