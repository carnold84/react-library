// .svgrrc.js
module.exports = {
  replaceAttrValues: { '#000': 'inherit' },
  svgoConfig: {
    plugins: {
      removeViewBox: false,
    },
  },
  svgProps: { fill: 'inherit' },
  typescript: true,
};
