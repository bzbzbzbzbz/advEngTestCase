<template>
  <input
    class="v-input"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :value="value"
  >
</template>

<script>
export default {
  name: 'VInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .v-input {
    height: 32px;
    padding: 0 32px;
  }
</style>