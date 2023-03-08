<template>
  <div class="new-order">
    <v-new-order />
  </div>
</template>

<script>
import VNewOrder from '@/components/VNewOrder/VNewOrder.vue'

export default {
  name: 'NewOrder',
  components: {
    VNewOrder
  }
}
</script>

<style lang="scss">
  .new-order {
    padding: 32px 0;
  }
</style>