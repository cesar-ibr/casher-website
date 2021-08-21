export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: 'Corporativo Casher',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Servicios de Vigilancia, Limpieza, Jardinería, Fumigaciones, Productos Químicos, Insumos y de Mantenimiento',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Corporativo CASHER',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://corporativocasher.com',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Servicios de Vigilancia, Limpieza, Jardinería, Fumigaciones, Productos Químicos, Insumos y de Mantenimiento',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://corporativocasher.com/casher-logo.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/router-extras',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
