import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { content } from '@/content'
import { useHead } from '@vueuse/head'

const contentRoutes = content.routes

export enum RouteName {
    Home = 'home',
    Lab1_1 = 'lab-1-1',
    Lab1_2 = 'lab-1-2',
    Lab2_1 = 'lab-2-1',
    Lab2_2 = 'lab-2-2',
    Lab3_1 = 'lab-3-1',
    Lab3_2 = 'lab-3-2',
    Lab4 = 'lab-4',
    PageNotFound = 'page-not-found',
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: RouteName.Home,
        meta: { title: contentRoutes.home },
        component: () => import('@/views/home/home.view.vue'),
    },
    {
        path: '/lab-1-1',
        name: RouteName.Lab1_1,
        meta: { title: contentRoutes.lab1_1 },
        component: () => import('@/views/lab-1-1/lab-1-1.view.vue'),
    },
    {
        path: '/lab-1-2',
        name: RouteName.Lab1_2,
        meta: { title: contentRoutes.lab1_2 },
        component: () => import('@/views/lab-1-2/lab-1-2.view.vue'),
    },
    {
        path: '/lab-2-1',
        name: RouteName.Lab2_1,
        meta: { title: contentRoutes.lab2_1 },
        component: () => import('@/views/lab-2-1/lab-2-1.view.vue'),
    },
    {
        path: '/lab-2-2',
        name: RouteName.Lab2_2,
        meta: { title: contentRoutes.lab2_2 },
        component: () => import('@/views/lab-2-2/lab-2-2.view.vue'),
    },
    {
        path: '/lab-3-1',
        name: RouteName.Lab3_1,
        meta: { title: contentRoutes.lab3_1 },
        component: () => import('@/views/lab-3-1/lab-3-1.view.vue'),
    },
    {
        path: '/lab-3-2',
        name: RouteName.Lab3_2,
        meta: { title: contentRoutes.lab3_2 },
        component: () => import('@/views/lab-3-2/lab-3-2.view.vue'),
    },
    {
        path: '/lab-4',
        name: RouteName.Lab4,
        meta: { title: contentRoutes.lab4 },
        component: () => import('@/views/lab-4/lab-4.view.vue'),
    },
]

const serviceRoutes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        name: RouteName.PageNotFound,
        meta: { title: contentRoutes.notFound },
        component: () => import('@/views/system/not-found.view.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...routes, ...serviceRoutes],
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title || 'Default Title'
    useHead({
        title,
    })
    next()
})

export default router
