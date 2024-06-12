const { dependencies } = require('./package.json');

module.exports = {
  name: 'shared',
  exposes: {
    './Footer': './src/components/Footer',
    './Header': './src/components/Header',
  },
  filename: 'sharedEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};


