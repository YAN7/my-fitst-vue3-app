import { RouteRecordRaw } from 'vue-router'
import App from '../App.vue'
import Home from '../pages/Home/Index.vue'
import Detail from '../pages/Detail/Index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/detail',
        component: Detail,
    },
]

export default routes
