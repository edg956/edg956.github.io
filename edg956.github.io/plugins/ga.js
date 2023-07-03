import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app, $config }, inject) => {
  const router = app.router;

  Vue.use(
    VueGtag,
    {
      config: {
        id: $config.googleAnalyticsId
	  },
      appName: 'donaque.xyz',
      pageTrackerScreenviewEnabled: true,
      enabled: $config.isProd 
    },
    router
  );
}

