import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import('@/views/Home')
const Goods = () => import('@/views/Goods')
const User = () => import('@/views/User')
const Order = () => import('@/views/Order')
const Free = () => import('@/views/Free')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '/home',
    component: Home
  },
  {
    path: '/goods',
    name: '/goods',
    component: Goods
  },
  {
    path: '/user',
    name: '/user',
    component: User
  },
  {
    path: '/order',
    name: '/order',
    component: Order
  },
  {
    path: '/free',
    name: '/free',
    component: Free
  },

]

const router = new VueRouter({
  routes
})

export default router
