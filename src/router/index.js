import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import newOrder from '@/views/newOrder.vue'
import authPage from '@/views/authPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new-order',
      name: 'newOrder',
      component: newOrder,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/auth',
      name: 'authPage',
      component: authPage,
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('auth')
  if (to.meta.requiresAuth !== !!auth) {
    next(auth ? '' : '/auth')
  } else {
    next()
  }
})

export default router
