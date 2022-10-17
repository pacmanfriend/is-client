import {createRouter, createWebHistory} from 'vue-router'

import Lab1 from "../views/Lab1.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/lab1",
            component: Lab1,
        }
    ]
})

export default router
