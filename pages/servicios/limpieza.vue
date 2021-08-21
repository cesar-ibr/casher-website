<template>
  <card-section
    title="Servicion de Limpieza"
    header-img="cleaners-group.jpeg"
  >
    <p class="py-4">
      Estamos dedicados al cuidado de su residencia, industrial, comercial,
      hospitales, instituciones educativas, edificios. Ayudando al control
      sanitario para garantizar la seguridad, higiene y tranquilidad de
      todos. Ofrecemos la mejor calidad en productos y precios del mercado
      con garantía y productos naciones e internacionales
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
    title: 'Limpieza | Corporativo CASHER',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Limpieza | Corporativo CASHER',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Limpieza | Corporativo CASHER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Servicio de Limpieza',
      },
    ],
  },
};
</script>
