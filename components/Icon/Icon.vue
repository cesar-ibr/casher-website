<template>
  <img
    :src="imgPath"
    :alt="alt"
    :width="width"
    class="inline"
  >
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24,
    },
    iconName: {
      type: String,
      required: true,
      default: '',
    },
    alt: {
      type: String,
      default: 'Icon Image',
    },
  },
  computed: {
    imgPath () {
      return require(`~/assets/icons/${this.iconName}.svg`);
    },
  },
};
</script>
