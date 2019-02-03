import Vue from 'vue';
import App from './App';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router'
import store from './store/index';
import registerServiceWorker from './registerServiceWorker'

Vue.use(VueAxios, Axios, registerServiceWorker)

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');