import Vue from 'vue';
import App from './App';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router'
import store from './store/index';

Vue.use(VueAxios, Axios)
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');