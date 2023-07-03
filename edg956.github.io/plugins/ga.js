import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({app: {router}, $config}, inject) => {
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

