import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { content } from '@/content'
import { useHead } from '@vueuse/head'

const contentRoutes = content.routes

export enum RouteName {
    Home = 'home',
    PageNotFound = 'page-not-found',
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: RouteName.Home,
        meta: { title: contentRoutes.home },
        component: () => import('@/views/home/home.view.vue'),
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
