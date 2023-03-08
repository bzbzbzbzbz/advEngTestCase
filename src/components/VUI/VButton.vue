<template>
  <button
    class="v-button"
    :class="{
      __red: red
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    red: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .v-button {
    height: 32px;
    background: var(--c-white);
    border: none;
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
    font-size: 16px;
    &:hover {
      background: var(--c-green);
    }
    &.__red {
      &:hover {
        background: var(--c-red);
      }
    }
  }
</style>