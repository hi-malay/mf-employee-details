const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.devServer = {
    ...singleSpaWebpackConfig.devServer,
    host: '0.0.0.0',
    port: 4200,
    historyApiFallback: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  return singleSpaWebpackConfig;
};
