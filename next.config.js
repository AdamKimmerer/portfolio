/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  experimental:{
    //Only For Next.js versions prior to 14.1.0 because it is enabled by default since version 14.1.0 
    windowHistorySupport:true 
},
}

module.exports = nextConfig
