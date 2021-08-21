<template>
  <card-section
    title="Jardinería con un enfoque profesional y responsable con el medio ambiente"
    header-img="gardener.jpeg"
  >
    <p class="py-4">
      <strong>Poda de árboles y palmas:</strong>
      eliminación de ramas que se rozan entre sí, que interfieran con cables,
      ramas muertas, ramas dañadas.
    </p>
    <p class="py-4">
      <strong>Mantenimiento de jardines:</strong>
      poda de pasto, de arbustos, programa de fertilización, control de
      plagas, limpieza de zona de trabajo, retiro de residuos orgánicos o productos de trabajo.
    </p>
    <p class="py-4">
      <strong>Instalación:</strong> de flores y plantas de temporada
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
    title: 'Jardinería | Corporativo CASHER',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Jardinería | Corporativo CASHER',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Jardinería | Corporativo CASHER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Jardinería con un enfoque profesional y responsable con el medio ambiente',
      },
    ],
  },
};
</script>
