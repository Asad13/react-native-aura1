const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    sourceExts: [
      ...defaultConfig.resolver.sourceExts,
      'ts',
      'tsx',
      'js',
      'jsx',
    ], // Ensure handling of these extensions
    assetExts: [
      ...defaultConfig.resolver.assetExts,
      'svg',
      'png',
      'jpg',
      'ttf',
    ], // Include common image formats and .ttf for fonts
    extraNodeModules: {
      ...defaultConfig.resolver.extraNodeModules,
      '@app': `${__dirname}/app`,
      '@components': `${__dirname}/components`,
      '@ui': `${__dirname}/ui`,
      '@assets': `${__dirname}/assets`,
      '@constants': `${__dirname}/constants`,
      '@utils': `${__dirname}/utils`,
      '@types': `${__dirname}/types`,
    },
  },
};
