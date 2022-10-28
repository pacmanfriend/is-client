import {createRouter, createWebHistory} from 'vue-router'

import Main from "@/views/Main.vue";
import Lab1 from "@/views/Lab1.vue";
import Lab2 from "@/views/Lab2.vue";
import Lab3 from "@/views/Lab3.vue";

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
        },
        {
            path: "/lab3",
            component: Lab3
        }
    ]
})

export default router
