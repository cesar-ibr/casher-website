<template>
  <div>
    <!-- TODO: Create Main Navbar -->
    <section
      class="
        p-4
        bg-orange
        text-white
        sticky
        top-0
        flex
        items-center
        justify-end
        z-10
      "
    >
      <a href="/" class="mr-auto">
        <img
          src="~/assets/img/casher-logo.png"
          alt="Casher Logo"
          width="50"
        >
      </a>
      <a href="/#services" class="mr-8">Rubros</a>
      <a href="/contacto">Contacto</a>
    </section>
    <div class="container mx-auto">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
  components: {},
};
</script>
