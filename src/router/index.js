import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/Top.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import MyPage from '@/views/MyPage.vue'
import Search from '@/views/Search.vue'
import Posts from '@/views/posts/Index.vue'
import PostsDetail from '@/views/posts/Detail.vue'

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
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/posts/:id',
    name: 'posts-detail',
    props: true,
    component: PostsDetail,
  },
  {
    path: '*',
    redirect: { name: 'top' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
