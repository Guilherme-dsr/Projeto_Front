import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueResource from 'vue-resource';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource)
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  render: h => h(App)
})
