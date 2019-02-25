import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Random from '@/components/Random';
import Sticker from '@/components/Sticker';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/',
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Random',
            name: 'Random',
            component: Random,
        },
        {
            path: '/Sticker',
            name: 'Sticker',
            component: Sticker,
        },
    ],
});
