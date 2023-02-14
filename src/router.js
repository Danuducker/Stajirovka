import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/chub',
            component: () => import('./components/chubarich.vue')
        },
        {
            path: '/converter',
            component: () => import('./components/converter.vue')
        }
    ]
});

export default router;