// .svgrrc.js
module.exports = {
  replaceAttrValues: { '#000': 'currentColor' },
  svgoConfig: {
    plugins: {
      convertShapeToPath: true,
      removeViewBox: false,
    },
  },
  typescript: true,
};
