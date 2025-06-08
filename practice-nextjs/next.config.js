/** @type {import('next').NextConfig} */


// here manually i need to config every hostname 
// module.exports = {
//   images: {
//     domains: ['bs-uploads.toptal.io'],
//   },
// }

// here I allow all hostname
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}