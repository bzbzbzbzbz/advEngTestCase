<template>
  <div class="v-new-order">
    <h1>Добавить заказ:</h1>
    <form
      class="v-new-order_form"
      @submit.prevent="eventsStore.addEvent"
    >
      <v-input
        name="user"
        placeholder="Введите ваше имя"
        :value="authStore.user.name"
        type="text"
        required
      />
      <v-input
        name="address"
        placeholder="Введите ваш адрес"
        type="text"
        required
      />
      <v-input
        name="comment"
        placeholder="Комментарий"
        type="text"
        required
      />
      <v-button>
        Добавить заказ
      </v-button>
    </form>
  </div>
</template>

<script>
import { auth } from '@/stores/auth'
import { events } from '@/stores/events'

export default {
  name: 'VNewOrder',
  data() {
    return {
      authStore: auth(),
      eventsStore: events()
    }
  }
}
</script>

<style lang="scss">
  .v-new-order {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 500px;
  }
  .v-new-order_form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
</style>