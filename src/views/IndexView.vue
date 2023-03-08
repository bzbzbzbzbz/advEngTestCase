<template>
  <div class="index-view">
    <v-table />
  </div>
</template>

<script>
import VTable from '@/components/VTable/VTable.vue'

export default {
  name: 'IndexView',
  components: {
    VTable
  }
}
</script>

<style lang="scss">
  .index-view {
    padding: 32px 0;
  }
</style>