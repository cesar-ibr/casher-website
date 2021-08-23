<template>
  <div class="container">
    <div
      class="h-80 bg-cover"
      :style="imgCss"
    />
    <div class="w-full md:w-3/4 mx-auto bg-white rounded-xl p-8 shadow-md" style="margin-top: -2rem;">
      <h1 class="text-2xl py-8 text-center uppercase" v-text="title" />
      <slot />
      <a
        v-if="contactButton"
        href="/contacto"
        class="block text-center py-8"
      >
        <Button css="bg-blue"> Contratar Servicio </Button>
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
    headerImg: {
      type: String,
      required: true,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    imgStyles: {
      type: Object,
      default: () => ({}),
    },
    contactButton: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    imgPath () {
      return require(`~/assets/img/${this.headerImg}`);
    },
    imgCss () {
      const backgroundImage = `url('${this.imgPath}')`;
      return Object.assign({}, { backgroundImage }, this.imgStyles);
    },
  },
};
</script>
