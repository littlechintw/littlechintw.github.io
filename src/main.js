import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

import VueGtag from "vue-gtag";

const vue_router = new VueRouter({
  routes: [
    { name: 'Home', path: '/' },
  ]
});

Vue.use(VueGtag, {
  config: { id: "G-VGDKRYEE2D" }
}, vue_router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')