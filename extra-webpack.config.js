const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

module.exports = (config) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config);

  singleSpaWebpackConfig.devServer = {
    ...singleSpaWebpackConfig.devServer, // Retain existing devServer config if any
    host: "0.0.0.0",
    port: 4200,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  return singleSpaWebpackConfig;
};
