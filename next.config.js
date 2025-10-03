
// next.config.js
module.exports = {
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
