<template>
  <card-section
    title="Tenemos los productos que tu empresa necesita"
    header-img="supplies.jpeg"
  >
    <p>
      Se denominan insumos a aquellos <strong>bienes o productos</strong> que se utilizan para la
      creación o fabricación de otro producto nuevo. La gestión de los insumos es
      fundamental en una empresa, grande o pequeña, ya que asegura el buen desarrollo
      de la producción y puede constituirse en una importante <strong>reducción de costos</strong>.
    </p>
    <p class="py-4">
      <strong>Insumos en general:</strong> industria, sector salud, limpieza, planteles educativos,
      oficinas, residencial, maquinaria, computo, manufactura, aluminio, madera,
      acero, polietileno, alimentos, transporte, construcción, minería, agrícola,
      mar y pesca, petróleo y gas,
    </p>
    <p class="py-4">
      El regreso al trabajo presencial después del confinamiento por la pandemia está
      cada vez más cerca, y como responsable del área debe asegurarse de que sus colaboradores
      y clientes trabajen en un sitio seguro y limpio para evitar contagios y la propagación del virus.
    </p>
    <p class="py-4">
      <strong>Insumos nueva normalidad:</strong>
    </p>
    <ul class="list-inside list-disc pb-4">
      <li>Alcohol en gel en dispensadores</li>
      <li>Toallitas desinfectantes</li>
      <li>Cubrebocas</li>
      <li>Medidores de temperatura</li>
      <li>Basureros y dispensadores sin contacto</li>
      <li>Purificadores portátiles</li>
      <li>Mamparas y cubículos</li>
      <li>Tapetes desinfectantes</li>
    </ul>
  </card-section>
</template>
<script>
import CardSection from '@/components/page-services/card-section.vue';

export default {
  components: {
    CardSection,
  },
  head: {
    title: 'Insumos | Corporativo CASHER',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Insumos | Corporativo CASHER',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Insumos | Corporativo CASHER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Tenemos los productos que tu empresa necesita',
      },
    ],
  },
};
</script>
