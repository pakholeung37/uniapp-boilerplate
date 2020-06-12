module.exports = {
  configureWebpack: {
    devServer: {
      clientLogLevel: "info",
      proxy: {
        "/cors": {
          target: "https://wxapp.dev.faisco.com.cn",
          pathRewrite: { "^/cors": "" },
        },
      },
    },
  },
  lintOnSave: false,
};
