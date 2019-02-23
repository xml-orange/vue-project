const path = require('path');
module.exports = {
    // 这里是打包的入口文件相对路径
    entry: './ceshi.js',
    output: {
      // 打包结果存放的位置, 必须用绝对路劲
      path: path.resolve(__dirname, 'dist'),
      // 打包结果文件名称
      filename: 'bundle.js',
    },
  };
  