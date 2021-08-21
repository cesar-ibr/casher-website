<template>
  <card-section
    title="Productos Químicos, encontraras calidad y profesionalismo total"
    header-img="chemicals.jpeg"
  >
    <p><strong>Nuestros productos:</strong></p>
    <p class="py-2">
      <span class="text-blue">Aromas:</span> Fresco, Canela, Cereza, Chicle, Coco, Floral, Lavanda,
      Manzana, Vainilla, y Eliminador deolores.
    </p>
    <p class="py-2">
      <span class="text-blue">Biológicos:</span> limpiador de pisos y baños, cuidado en los entornos
      de industria avícola, pecuaria, piscícola, Porcicola, aguas
      residuales, fosas sépticas y baños portátiles.
    </p>
    <p class="py-2">
      <span class="text-blue">Desengrasantes: </span>industrial, motores y superficies metálicas,
      detergente alcalino clorado con espuma.
    </p>
    <p class="py-2">
      <span class="text-blue">Desinfectantes:</span> cloro, desinfectante y detergente para quirófano
      y áreas blancas, gel antibacterial, jabón para manos antibacterial,
      sanitizante.
    </p>
    <p class="py-2">
      <span class="text-blue">Industria Motriz:</span> abrillantador de plástico y vinil, anticongelante,
      shampo para autos, aceite diferencial, aceite hidráulico.
    </p>
    <p class="py-2">
      <span class="text-blue">Limpieza: </span>detergente, jabón líquido para manos en diversos aromas,
      limpiador de aceros, limpiados de alfombras, limpiador de vidrios,
      quita sarro.
    </p>
    <p class="py-2">
      <span class="text-blue">Tratamiento de Pisos:</span> abrillantador de pisos, restaurador de brillo,
      removedor de acabados.
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
    title: 'Productos Químicos | Corporativo CASHER',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Productos Químicos | Corporativo CASHER',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Productos Químicos | Corporativo CASHER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Productos Químicos, encontraras calidad y profesionalismo total',
      },
    ],
  },
};
</script>
