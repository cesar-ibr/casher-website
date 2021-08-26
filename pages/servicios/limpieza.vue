<template>
  <card-section
    title="Encontraras calidad y profesionalismo total"
    header-img="cleaners-group.jpeg"
  >
    <p class="py-4">
      <strong>Somos una empresa de personal de limpieza,</strong> en el cual nuestros
      colaboradores pueden ser femenino, o masculino, con todo el
      equipamiento especializado necesario y completo para brindar un
      servicio profesional según las necesidades que requieran donde daremos el servicio.
    </p>
    <p class="py-4">
      <strong>A lo largo de 30 años hemos brindado servicio en:</strong> Corporativos, industria, plazas
      comerciales, habitacional, hospitales, gasolineras, colonias, planteles educativos y
      en diferentes entidades Federativas de la República Mexicana
    </p>
    <p class="py-4">
      <strong>Cada elemento de limpieza:</strong> cuenta con todo el equipo necesario para brindar un servicio
      profesional, como: uniforme, accesorios y herramientas generales para dar una limpieza
      según sea el caso, con una supervisión eficaz en la cual ayuda para ver áreas de oportunidad
      y solución a incidencias.
    </p>
    <p class="py-4">
      <strong>Personal de Limpieza CASHER</strong> Somos personas de limpieza capacitados para dar un
      servicio profesional de limpieza y salvaguardar los bienes materiales de ustedes
      mediante limpieza constante. En la cual el personal está altamente capacitado.
      Contando con métodos y procedimientos en la cual garantizamos un servicio profesional.
      Supervisiones diarias de jornadas diurnas, nocturnas a nuestro personal de limpieza.
      Entrevistas con los funcionarios responsables del área, para recibir retroalimentación
      y evitar posibles fallas.
    </p>
    <p class="py-4">
      Si en el servicio que te están dando en este momento, el personal de limpieza duerme, hay polvo,
      no cuentan con controles, no te dan reportes, no hay supervisión, no conoces al supervisor o gerente.
    </p>
    <p class="py-4">
      <strong>¡Somos la solución!</strong> para abrillantar las áreas donde se dará el servicio.
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
