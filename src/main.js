// cores and libs
import Vue from 'vue';
import App from './app.component.vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueForm from 'vue-form';
import * as VueGoogleMaps form 'vue2-google-maps'

// internal libs
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueForm);
Vue.use{key: 'AIzaSyArIba7jYFIwBPBDgXD0r6vsWoXnQCD3QA', libraries: 'places'}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
