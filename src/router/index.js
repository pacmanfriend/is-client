import {createRouter, createWebHistory} from 'vue-router'

import Main from "@/views/Main.vue";
import Lab1 from "@/views/Lab1.vue";
import Lab2 from "@/views/Lab2.vue";
import Lab3 from "@/views/Lab3.vue";
import Lab4 from "@/views/Lab4.vue";
import Lab5 from "@/views/Lab5.vue";
import Lab6 from "@/views/Lab6.vue";
import Lab7 from "@/views/Lab7.vue";
import Lab8 from "@/views/Lab8.vue";


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
        },
        {
            path: "/lab4",
            component: Lab4
        },
        {
            path: "/lab5",
            component: Lab5
        },
        {
            path: "/lab6",
            component: Lab6
        },
        {
            path: "/lab7",
            component: Lab7
        },
        {
            path: '/lab8',
            component: Lab8
        }
    ]
})

export default router
