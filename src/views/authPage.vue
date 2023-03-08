<template>
  <div class="auth-page">
    <v-auth />
  </div>
</template>

<script>
import VAuth from '@/components/VAuth/VAuth.vue'

export default {
  name: 'AuthPage',
  components: {
    VAuth
  }
}
</script>

<style lang="scss">
  .auth-page {
    padding: 32px 0;
  }
</style>