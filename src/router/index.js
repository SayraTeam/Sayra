import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Random from '@/components/Random'
import Sticker from '@/components/Sticker'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*', 
            redirect: '/'
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
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
    ],
});