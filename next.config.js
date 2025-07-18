// next.config.js
module.exports = {
  webpack: (config) => {
    config.externals = config.externals || {};
    config.externals['@media-loader'] = '@media-loader';
    return config;
  }
};
