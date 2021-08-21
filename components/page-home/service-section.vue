<template>
  <div class="flex flex-col md:flex-row">
    <img
      :src="imgPath"
      :alt="alt"
      class="max-w-xs md:mx-w-sm object-cover mx-auto"
    >
    <div class="md:w-3/6">
      <p class="text-2xl pt-4 md:pt-0" v-text="title" />
      <slot />
      <a href="/contacto" class="block text-center">
        <Button color="blue"> Contratar Servicio </Button>
      </a>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button/Button.vue';

export default {
  components: {
    Button,
  },
  props: {
    img: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    imgPath () {
      return require(`~/assets/img/${this.img}`);
    },
  },
};
</script>
