<template>
  <div
    :class="[
      'shadow bg-white',
      padding,
      rounded ? 'rounded-full' : 'rounded-xl',
      clickable ? 'hover:shadow-lg cursor-pointer':'',
      columnLayout ? 'flex flex-col' : ''
    ]"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    padding: {
      type: String,
      default: 'p-8',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    columnLayout: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
