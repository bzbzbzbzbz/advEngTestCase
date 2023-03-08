import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import { auth } from '@/stores/auth'

import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'
import './assets/styles/typography.scss'
import './assets/styles/vars.scss'

import {
  VButton,
  VInput,
} from './components/VUI'

Vue.use(PiniaVuePlugin)

Vue.component('VButton', VButton)
Vue.component('VInput', VInput)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  const authStore = auth()
  if (to.meta.requiresAuth !== !!authStore.auth) {
    next(auth ? '' : '/auth')
  } else {
    next()
  }
})

