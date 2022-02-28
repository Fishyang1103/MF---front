import Vue from 'vue'
import VueRouter from 'vue-router'
import front from '../views/Front.vue'
import store from '../store'

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
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/About.vue'),
        meta: {
          title: 'MF - 關於我們'
        }
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '../views/front/Products.vue'),
        meta: {
          title: 'MF - 所有商品'
        }
      },
      {
        path: 'eachProduct/:id',
        name: 'Eachproduct',
        component: () => import(/* webpackChunkName: "eachProduct" */ '../views/front/EachProduct.vue'),
        meta: {
          title: 'MF - 商品介紹'
        }
      },
      {
        path: 'language',
        name: 'Language',
        component: () => import(/* webpackChunkName: "language" */ '../views/front/Language.vue'),
        meta: {
          title: 'MF - 花語大全'
        }
      },
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
    component: () => import(/* webpackChunkName: "Back" */ '../views/Back.vue'),
    meta: {
      title: 'MF - FlowerShop'
    },
    children: [
      {
        path: 'member',
        name: 'Member',
        component: () => import(/* webpackChunkName: "Member" */ '../views/back/Member.vue'),
        meta: {
          login: true,
          title: '會員專區 | MF'
        },
        children: [
          {
            path: 'membercart',
            name: 'MemberCart',
            component: () => import(/* webpackChunkName: "Member" */ '../views/back/MemberCart.vue'),
            meta: {
              login: true,
              title: '購物車 | MF'
            }
          },
          {
            path: 'memberorders',
            name: 'MemberOrders',
            component: () => import(/* webpackChunkName: "Member" */ '../views/back/MemberOrders.vue'),
            meta: {
              login: true,
              title: '訂單查詢 | MF'
            }
          }
        ]
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "Admin" */ '../views/back/Admin.vue'),
        meta: {
          login: true,
          admin: true,
          title: '管理員專區'
        },
        children: [
          {
            path: 'adminorders',
            name: 'AdminOrders',
            component: () => import(/* webpackChunkName: "admin" */ '../views/back/AdminOrders.vue'),
            meta: {
              login: true,
              admin: true,
              title: '訂單管理 | MF'
            }
          },
          {
            path: 'adminproducts',
            name: 'AdminProducts',
            component: () => import(/* webpackChunkName: "admin" */ '../views/back/AdminProducts.vue'),
            meta: {
              login: true,
              admin: true,
              title: '商品管理 | MF'
            }
          }
        ]
      }
    ]
  },
  // 亂打網址會被丟到首頁
  {
    path: '*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

// 路由守衛 router god
// 沒權限就進不去
router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

// 換router會回到最上面
// 進入每頁網站換title
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  document.title = to.meta.title
})

export default router
