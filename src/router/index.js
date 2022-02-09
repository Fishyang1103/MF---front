import Vue from 'vue'
import VueRouter from 'vue-router'
import front from '../views/Front.vue'
import back from '../views/Back.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Front',
    component: front,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/front/Home.vue'),
        meta: {
          title: 'MF - FlowerShop'
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/About.vue'),
        meta: {
          title: 'MF - 關於我們'
        }
      },
      // {
      //   path: 'products',
      //   name: 'Products',
      //   component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
      //   meta: {
      //     title: 'MF - 商品介紹'
      //   }
      // },
      // {
      //   path: 'language',
      //   name: 'Language',
      //   component: () => import(/* webpackChunkName: "language" */ '../views/Language.vue'),
      //   meta: {
      //     title: 'MF - 花語大全'
      //   }
      // },
      {
        path: 'care',
        name: 'Care',
        component: () => import(/* webpackChunkName: "care" */ '../views/front/Care.vue'),
        meta: {
          title: 'MF - 花の呵護'
        }
      },
      {
        path: 'signUp',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "signUp" */ '../views/front/SignUp.vue'),
        meta: {
          title: 'MF - SignUp'
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/front/Login.vue'),
        meta: {
          title: 'MF - Login'
        }
      }
    ]
  },
  {
    path: '/back',
    name: 'Back',
    component: back,
    meta: {
      title: 'MF - FlowerShop'
    }
  }
]

const router = new VueRouter({
  routes
})

// 進入每頁網站換title
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
