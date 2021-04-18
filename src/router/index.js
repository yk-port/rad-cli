import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/top.vue'
import Login from '@/views/login.vue'
import SignUp from '@/views/signup.vue'
import MyPage from '@/views/mypage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
