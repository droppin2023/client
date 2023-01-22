/* eslint-env node */
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
  },
}

// eslint-disable-next-line
const withTM = require('next-transpile-modules')(['@droppin/contracts']) // TODO

module.exports = withTM(nextConfig)
