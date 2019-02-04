import Vue from 'vue';
import App from './App';
import router from './router'
import store from './store/index';
import registerServiceWorker from './registerServiceWorker'

Vue.use(registerServiceWorker)

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');