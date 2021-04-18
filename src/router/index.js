import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/top.vue'
import Login from '@/views/login.vue'
import SignUp from '@/views/signup.vue'
import MyPage from '@/views/mypage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Top },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/mypage', component: MyPage },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
