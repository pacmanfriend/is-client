import {createRouter, createWebHistory} from 'vue-router'

import Main from "@/views/Main.vue";
import Lab1 from "@/views/Lab1.vue";
import Lab2 from "@/views/Lab2.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Main
        },
        {
            path: "/lab1",
            component: Lab1,
        },
        {
            path: "/lab2",
            component: Lab2
        }
    ]
})

export default router
