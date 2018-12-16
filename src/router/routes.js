import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'

export default [
    {
        path: '/',
        component: KbnBoardView,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        component: KbnLoginView,
    },
    {
        path: '*',
        rediredt: '/',
    }
]