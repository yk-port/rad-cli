import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/top.vue'
import Login from '@/views/login.vue'
import SignUp from '@/views/signUp.vue'
import MyPage from '@/views/myPage.vue'
import Search from '@/views/search.vue'
import CategoryIndex from '@/views/category/categoryIndex.vue'
import Posts from '@/views/posts/index.vue'
import PostsDetail from '@/views/posts/detail.vue'

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
    name: 'category-index',
    props: true,
    component: CategoryIndex,
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
