import Vue from 'vue';
import CharityPage from '../CharityPage';
import router from '../router';
import store from '../store';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.config.productionTip = false;
Vue.use(element);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(CharityPage)
}).$mount('#app');