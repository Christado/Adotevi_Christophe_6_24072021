const path = require('path');

module.exports = {
  entry: { index : './js/index.js', photographe:'./js/photographe.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};