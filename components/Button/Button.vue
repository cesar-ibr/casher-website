<template>
  <button
    :class="cssColors"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    /**
     * Tailwing classes: 'bg-primary', 'bg-secondary'...
     */
    css: {
      type: String,
      default: 'bg-primary',
    },
    /**
     * Disabled status
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssColors () {
      const classes = this.disabled ? 'bg-gray-light' : this.css;
      const shadow = this.disabled ? '' : 'shadow hover:shadow-md';
      return ['btn', classes, shadow];
    },
  },
};
</script>
<style lang="postcss" scoped>
.btn {
  @apply font-medium rounded-full px-8 py-4 text-white font-semibold;
}
</style>
