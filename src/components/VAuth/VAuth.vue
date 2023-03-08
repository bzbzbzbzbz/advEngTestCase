<template>
  <div class="v-auth">
    <h1>Авторизуйтесь:</h1>
    <form
      class="v-auth_form"
      @submit.prevent="sendAuth"
    >
      <v-input
        name="user"
        type="text"
        placeholder="Имя пользователя"
        required
      />
      <v-input
        name="password"
        type="password"
        placeholder="Пароль"
        required
      />
      <v-button>
        Войти
      </v-button>
      <p v-if="authStore.err">
        {{ authStore.err }}
      </p>
    </form>
  </div>
</template>

<script>
import { auth } from '@/stores/auth'

export default {
  name: 'VAuth',
  data() {
    return {
      authStore: auth()
    }
  },
  methods: {
    sendAuth (props) {
      this.authStore.sendAuth(props.target.user.value, props.target.password.value)
    }
  }
}
</script>

<style lang="scss">
  .v-auth {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 500px;
  }
  .v-auth_form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
</style>