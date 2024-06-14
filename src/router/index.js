import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import { HOME_URL, EXCEPTION_404_URL } from '@/config'

Vue.use(Router)

export const routes = [
    {
        // Home
        path: HOME_URL,
        component: Layout,
        redirect: HOME_URL,
        children: [
            {
                path: '',
                name: 'Home',
                meta: {
                    title: 'Home'
                },
                component: () => import('@/views/home')
            }
        ]
    },
    {
        // Test
        path: '/test',
        component: Layout,
        redirect: '/test',
        children: [
            {
                path: '',
                name: 'Test',
                meta: {
                    title: 'Test'
                },
                component: () => import('@/views/test')
            }
        ]
    },

    {
        path: EXCEPTION_404_URL,
        component: () => import('@/views/exception/404.vue')
    },

    {
        path: '*',
        redirect: EXCEPTION_404_URL
    }
]

export default new Router({
    routes
})
