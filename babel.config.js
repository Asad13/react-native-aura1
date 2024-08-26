module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@app': './app',
            '@components': './components',
            '@ui': './ui',
            '@assets': './assets',
            '@constants': './constants',
            '@utils': './utils',
            '@types': './types',
          },
        },
      ],
    ],
  };
};
