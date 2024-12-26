import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { content } from '@/content'
import { useHead } from '@vueuse/head'

const contentRoutes = content.routes

export enum RouteName {
    Home = 'home',
    Lab1 = 'lab-1-1',
    Lab2 = 'lab-1-2',
    Lab3 = 'lab-2-1',
    Lab4 = 'lab-2-2',
    Lab5 = 'lab-3-1',
    Lab6 = 'lab-3-2',
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
        name: RouteName.Lab1,
        meta: { title: contentRoutes.lab1 },
        component: () => import('@/views/lab-1/lab-1.view.vue'),
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
