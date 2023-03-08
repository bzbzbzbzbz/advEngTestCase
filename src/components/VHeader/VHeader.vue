<template>
  <div class="v-header">
    <div class="v-header_wrapper wrapper">
      <div class="v-header_links">
        <router-link to="/">
          Все заказы
        </router-link>
        <router-link to="/new-order">
          Добавить заказ
        </router-link>
      </div>
      <div class="v-header_actions">
        <p>{{ authStore.user.name }}</p>
        <v-button @click="authStore.deleteAuth">
          Выйти
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '@/stores/auth'

export default {
  name: 'VHeader',
  data() {
    return {
      authStore: auth()
    }
  },
}
</script>

<style lang="scss">
  .v-header {
    color: var(--c-white);
    padding: 20px 0;
    background: var(--c-gray);
  }
  .v-header_wrapper {
    display: flex;
    justify-content: space-between;
  }
  .v-header_links,
  .v-header_actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>