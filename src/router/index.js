import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ProjectsList from '../views/ProjectsList.vue';
import ProjectDetail from '../views/ProjectDetail.vue';
import Essora from '../views/Essora.vue';
import Simple from '../views/Simple.vue';



Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/simple',
        name: 'Simple',
        component: Simple
    },
    {
        path: '/essora',
        name: 'Essora',
        component: Essora
    },
    {
        path: '/projects/:category?',
        name: 'ProjectsList',
        component: ProjectsList
    },
    {
        path: '/project/:id',
        name: 'ProjectDetail',
        component: ProjectDetail,
        props: true
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

export default router;
