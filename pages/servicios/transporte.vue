<template>
  <card-section
    title="Nos adaptamos a tu operación y necesidades. Con unidades siempre disponibles para cubrir tu demanda, con inmediatez y eficiencia"
    header-img="bus-driver.jpeg"
  >
    <p class="py-4">
      Mantenemos la puntualidad de tu equipo de trabajo por
      medio de rutas eficientes y de fácil acceso. Viajando en
      unidades sanitizadas y climatizadas.
    </p>
    <p class="py-4">
      Somos especialistas en transporte ejecutivo, ya que
      brindamos un servicio que cumple con todos los requisitos
      de confort y seguridad.
    </p>
    <p class="py-4">
      Transporte en auto, camioneta, vans, camiones local y foráneo.
    </p>
  </card-section>
</template>
<script>
import CardSection from '@/components/page-services/card-section.vue';

export default {
  components: {
    CardSection,
  },
  head: {
    title: 'Transporte de Personal | Corporativo CASHER',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Transporte de Personal | Corporativo CASHER',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Transporte de Personal | Corporativo CASHER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Nos adaptamos a tu operación y necesidades',
      },
    ],
  },
};
</script>
