<template>
  <div>
    <topbar />
    <div class="container mx-auto">
      <Nuxt />
    </div>
    <!-- Footer -->
    <div class="pt-16 pb-2 text-center">
      <p class="text-xs">
        Corporativo Casher &#169; 2021 | Developed by
        <a href="https://cesarsan.dev" class="underline">cesarsan.dev</a>
      </p>
    </div>
  </div>
</template>
<script>
import Topbar from '@/components/Topbar/Topbar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Topbar,
  },
};
</script>
