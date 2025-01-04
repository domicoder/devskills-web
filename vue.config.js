module.exports = {
  transpileDependencies: ["vuetify"],
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "devskills VUE - NC form";
      return args;
    });
  },
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
};
