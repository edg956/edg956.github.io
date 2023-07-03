import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app, $config }, inject) => {
  Vue.use(
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

