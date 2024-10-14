// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: '/',
            component: Layout, //() => import("../views/Layout/index.vue"),
            children: [
                {
                    path: '', //默认二级路由
                    component: Home //() => import("../views/Home/index.vue"),
                },
                {
                    path: 'category/:id',
                    component: Category //() => import("../views/Category/index.vue"),
                }
            ]
        },
        {
            path: '/login',
            component: Login //() => import("../views/Login/index.vue"),
        }
    ]
})

export default router