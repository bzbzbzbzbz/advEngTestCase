<template>
  <div
    v-if="eventsStore.eventsData"
    class="v-table"
  >
    <div class="v-table_content">
      <div class="v-table_top">
        <p>№</p>
        <p>Имя клиента</p>
        <p
          class="__events"
          @click="toggleAddressSort"
        >
          Адрес
        </p>
        <p
          class="__events"
          @click="toggleDateSort"
        >
          Дата заказа
        </p>
        <p>Статус</p>
        <p>Комментарий</p>
        <p v-if="authStore.user.role === 'Admin'">
          Действия
        </p>
      </div>
      <div
        v-for="event in eventsStore.eventsData"
        :key="event._id"
        class="v-table_item"
        :class="{'__done': event.status === 'Выполнен', '__new': event.status === 'Новый'}"
      >
        <p>{{ event.id }}</p>
        <p>{{ event.name }}</p>
        <p>{{ event.address }}</p>
        <p>{{ humanDate(event.date) }}</p>
        <p>{{ event.status }}</p>
        <p>{{ event.comment }}</p>
        <div
          v-if="authStore.user.role === 'Admin'"
          class="v-table_item_actions"
        >
          <p @click="eventsStore.deletionId = event.id">
            Удалить
          </p>
          <p
            v-if="event.status === 'Новый'"
            @click="eventsStore.closeEvent(event)"
          >
            Изменить статус
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="eventsStore.deletionId"
      class="v-table_popup"
    >
      <div class="v-table_popup_content">
        <p>Вы действительно хотите удалить заказ?</p>
        <div class="v-table_popup_content_buttons">
          <v-button
            red
            @click="eventsStore.deleteEvent"
          >
            Да
          </v-button>
          <v-button @click="eventsStore.deletionId = ''">
            Нет, отмена
          </v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '@/stores/auth'
import { events } from '@/stores/events'

export default {
  name: 'VTable',
  data() {
    return {
      authStore: auth(),
      eventsStore: events(),
      sortType: {
        date: 'ASC',
        address: 'ASC'
      },
      showModal: ''
    }
  },
  created () {
    this.eventsStore.getEvents()
  },
  methods: {
    humanDate (date) {
      return new Date(date * 1000).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })
    },
    toggleAddressSort () {
      if (this.sortType.address === 'ASC') {
        this.eventsStore.eventsData.sort((a, b) => a.address.toLowerCase().localeCompare(b.address.toLowerCase()))
        this.sortType.address = 'DESC'
      } else {
        this.eventsStore.eventsData.sort((a, b) => b.address.toLowerCase().localeCompare(a.address.toLowerCase()))
        this.sortType.address = 'ASC'
      }
    },
    toggleDateSort () {
      if (this.sortType.date === 'ASC') {
        this.eventsStore.eventsData.sort((a, b) => a.date - b.date)
        this.sortType.date = 'DESC'
      } else {
        this.eventsStore.eventsData.sort((a, b) => b.date - a.date)
        this.sortType.date = 'ASC'
      }
    },

  }
}
</script>

<style lang="scss">
  .v-table {
    width: 100%;
    overflow-x: auto;
    position: relative;
  }
  .v-table_content {
    width: 100%;
    min-width: max-content;
  }
  .v-table_top,
  .v-table_item {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--c-black);
    border-left: 1px solid var(--c-black);
    border-right: 1px solid var(--c-black);
    &:last-child {
      border-bottom: 1px solid var(--c-black);
    }
    & p {
      flex: auto;
      padding: 20px;
      width: 50%;
      border-right: 1px solid var(--c-black);
      &:last-child {
        border-right: none;
      }
      &.__events {
        cursor: pointer;
        transition: color .3s ease-in-out;
        &:hover {
          color: var(--c-gray);
        }
      }
    }
    &.__done {
      background: var(--c-green);
    }
    &.__new {
      background: var(--c-blue);
    }
  }
  .v-table_item_actions {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    & p {
      padding: 0;
      border: none;
      width: unset;
      cursor: pointer;
      transition: color .3s ease-in-out;
      &:hover {
        color: var(--c-gray);
      }
    }
  }
  .v-table_popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .v-table_popup_content {
    background: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 250px;
  }
  .v-table_popup_content_buttons {
    display: flex;
    justify-content: space-between;
  }
</style>