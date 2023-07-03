import VueGtag from 'vue-gtag';

export default ({ app, $config }, inject) => {
  app.use(
    VueGtag,
    {
      config: {
        id: $config.googleAnalyticsId
	  },
      pageTrackerScreenviewEnabled: true,
      enabled: $config.isProd 
    },
    app.router
  );
}

