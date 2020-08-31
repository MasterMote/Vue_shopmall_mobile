import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Categroy = () => import('../views/categroy/Categroy.vue')
const ShopCart = () => import('../views/shopcart/ShopCart.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        name: 'Categroy',
        path: '/categroy',
        component: Categroy
    },
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'ShopCart',
        path: '/shopCart',
        component: ShopCart
    },
    {
        name: 'Profile',
        path: '/profile',
        component: Profile
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    next()
})

export default router