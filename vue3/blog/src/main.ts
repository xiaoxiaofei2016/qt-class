import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import service from './api/https';
import urls from './api/urls';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$https = service;
Vue.prototype.$urls = urls;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
