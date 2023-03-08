<template>
  <div id="app">
    <v-header v-if="authStore.auth" />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/VHeader/VHeader.vue'
import { auth } from '@/stores/auth'

export default {
  components: {
    VHeader,
  },
  data() {
    return {
      authStore: auth()
    }
  },
  created() {
    this.authStore.checkAuth()
  }
}
</script>

<style lang="scss">
</style>
