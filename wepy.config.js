const path = require('path');
var prod = process.env.NODE_ENV === 'production';

function resolve(dist) {
  return path.join(__dirname, dist);
}

module.exports = {
  wpyExt: '.wpy',
  static: ['./src/images'],
  eslint: true,
  cliLogs: !prod,
  build: {},
  resolve: {
    alias: {
      vant: resolve('src/components/vant-weapp'),
      '@': resolve('src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: ['@babel/preset-env'],
      plugins: ['@wepy/babel-plugin-import-regenerator']
    }
  },
  plugins: [],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
};
