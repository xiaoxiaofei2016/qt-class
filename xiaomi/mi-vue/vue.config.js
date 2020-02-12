module.exports = {
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    host: '0.0.0.0',
    disableHostCheck: true, //  新增该配置项
    port: 4000
  }
}
