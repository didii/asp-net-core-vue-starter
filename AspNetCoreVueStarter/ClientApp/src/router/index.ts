import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Counter from '@/views/Counter.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/counter',
        name: 'counter',
        component: Counter,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
