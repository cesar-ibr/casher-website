<template>
  <card-section
    title="La seguridad es primero"
    header-img="security.jpeg"
  >
    <p class="py-4">
      Personal de seguridad. Vigilancia en lugares en oficinas, residencial,
      clubs, comercial, industria,manufacturera, construcción, instituciones
      financieras y bancarias, centros sociales, eventos políticos, hotelería,
      aeropuerto dependencias públicas y gobierno, trasporte, con y sin arma de
      fuego. Cursos y seminarios, monitoreo con circuito cerrado, alarmas,
      sistema satelital, perros de protección y custodia, investigaciones privadas,
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
    title: 'Vigilancia | Corporativo CASHER',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Vigilancia | Corporativo CASHER',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Vigilancia | Corporativo CASHER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'La seguridad es primero',
      },
    ],
  },
};
</script>
