/* eslint-env node */
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: [
      'via.placeholder.com',
      'picsum.photos',
      'pbs.twimg.com',
      'powered.by.dustlabs.com',
      'img-cdn.magiceden.dev',
      'thumbs2.imgbox.com',
      'localhost',
    ],
  },
}

// eslint-disable-next-line
const withTM = require('next-transpile-modules')(['@droppin/contracts']) // TODO

module.exports = withTM(nextConfig)
