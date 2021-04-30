import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/Top.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import MyPage from '@/views/MyPage.vue'
import Search from '@/views/Search.vue'
import Category from '@/views/Category.vue'
import PostsNew from '@/views/posts/New.vue'
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
    path: '/register',
    name: 'register',
    component: Register,
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
    path: '/posts/new',
    name: 'posts-new',
    component: PostsNew,
  },
  {
    path: '/:id',
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
  // ページを切り替えた時に発火するvue-routerの関数、スクロールの挙動を指定することができる）
  scrollBehavior: (to, from, savedPosition) => {
    // ブラウザで「戻る」をした時、前のページでいた時のposition(x,yの値)を保持してくれているのが第三引数のsavedPosition
    console.log('savedPosition', savedPosition)
    // もし「戻る」ボタンを押した時に前回見ていた場所で表示するようにする
    if (savedPosition) {
      return savedPosition
    }

    // もしページ遷移した時にハッシュ#を指定したいたら（存在していたら）ハッシュ#の位置までスクロールする
    if (to.hash) {
      return {
        selector: to.hash,
      }
    }

    // もし、上記のいずれにも該当しなければ、一番上のpositionにしてあげる
    return { x: 0, y: 0 }
  },
})

export default router
