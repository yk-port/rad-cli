import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/top.vue'
import Login from '@/views/login.vue'
import SignUp from '@/views/signUp.vue'
import MyPage from '@/views/myPage.vue'
import Search from '@/views/search.vue'
import Category from '@/views/category.vue'
import Posts from '@/views/posts/index.vue'
import Post from '@/views/post.vue'

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
    path: '/category/:category',
    name: 'category',
    props: true,
    component: Category,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/:id',
    name: 'post',
    props: true,
    component: Post,
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
