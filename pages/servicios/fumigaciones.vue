<template>
  <card-section
    title="Somos una empresa de fumigación y sanitización"
    header-img="fumigation.jpeg"
  >
    <p class="py-4">
      <strong>Animales rastreros:</strong> cucarachas, hormigas, arañas,
      ciempiés, chinches, pulgas, garrapatas, alacranes, gusanos, etc.
      Se realiza principalmente por medio de productos insecticidas, asi como
      con gel, polvos granulados, según el área, es el producto que se ocupa.
    </p>
    <p class="py-2">
      <strong>Roedores:</strong> consta de inspección del área afectada,
      se fumiga, se instala áreas cebaderas, a las que se monitorean, y se
      les da mantenimiento hasta el termino del 100 % de la plaga.
    </p>
    <p class="py-2">
      <strong>Termitas: </strong> las termitas son muy destructivas, debido a
      que pueden consumir carpintería, y paredes de una casa en poco tiempo.
    </p>
    <p class="py-2">
      <strong>Insectos Voladores: </strong> Dengue, Zika, Mosquitos, Moscas,
      Palomillas, etc. El servicio incluye la detección de criaderos.
    </p>
    <p class="py-2">
      <strong>Sanitización: </strong> Residencial, Industrial, Comercio, Hospitales,
      Planteles educativos.
    </p>
    <p class="py-2 italic">
      Nuestro compromiso con la sociedad y nuestros clientes, nos hace estar
      preparados para el cuidado y satisfacción de ustedes.
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
    title: 'Fumigaciones | Corporativo CASHER',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Fumigaciones | Corporativo CASHER',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Fumigaciones | Corporativo CASHER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Somos una empresa de fumigación y sanitización',
      },
    ],
  },
};
</script>
