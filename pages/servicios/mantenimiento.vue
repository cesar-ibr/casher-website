<template>
  <card-section
    title="Mantenimiento en General preventivo y correctivo"
    header-img="plumber.jpeg"
    :img-styles="{ backgroundPosition: '-50% 100%' }"
  >
    <p class="py-4">
      Ofrecemos el servicio de mantenimiento integral de instalaciones.
      Los servicios que prestamos son de tipo residencial, comercial, industrial,
      y planteles educativos. contamos con capital humano totalmente capacitado para
      cada servicio brindado.
    </p>
    <p class="py-2">
      Garantizamos el óptimo funcionamiento de todas las áreas del condominio. Integramos un
      plan de mantenimiento general preventivo el cual consiste en supervisiones periódicas por
      parte de nuestros especialistas y personal de mantenimiento en planta, en donde se realizan
      inspecciones visuales y de funcionamiento de todo el equipo en las instalaciones, con el
      objetivo de prevenir posibles fallas y asegurar la conservación de instalaciones.
    </p>
    <p><strong>Diagnóstico de prevención</strong></p>
    <p class="py-2">
      Elaboramos un diagnostico general del condominio para detectar posibles fallas
      que puedan surgir en las instalaciones, con el propósito de reducir costos de
      reparación y daños considerables en el momento en que el activo ya presenté un
      problema mayor y sea complicada una labor de reparación.
    </p>
    <p><strong> Áreas de evaluación y servicio: </strong></p>
    <ul class="list-inside list-disc">
      <li>Albañilería</li>
      <li>Plomería</li>
      <li>Electricidad</li>
      <li>Construcción en general</li>
      <li>Carpintería</li>
    </ul>
    <a href="/contacto" class="block text-center py-4">
      <Button css="bg-blue"> Contratar Servicio </Button>
    </a>
    <p class="py-2 text-xl">
      Mantenimiento del Condominio
    </p>

    <p><strong>Mantenimiento menor</strong></p>
    <p class="py-2">
      Este mantenimiento consiste en actividades no especializadas y de bajo riesgo
      como lo son: aplicación de pintura en muros no mayores a 3 m, remplazo de focos,
      reparación de falsos contactos o cortos circuitos, aplicación de soldadura en
      tubería de agua, lavado profundo de estacionamientos y actividades similares
      de riesgo menor y que no requieren conocimientos muy especializados.
    </p>

    <p><strong>Mantenimiento mayor</strong></p>
    <p class="py-2">
      Consiste en el mantenimiento eventual de mayor riesgo para los trabajadores
      y este requiere de mano de obra especializada. Además, el personal deberá
      contar con los comprobantes de pago de prestaciones de Ley del Seguro Social
      y acreditando que el nivel de riesgo de la tarjeta patronal sea congruente
      con el trabajo a desempeñar.
    </p>

    <p class="py-2">
      Adicional a esta documentación se necesitan garantías por escrito donde indique el tiempo
      por el cual se garantiza el trabajo una vez finalizado, en caso de requerir anticipos se
      solicitará una fianza por buen uso de anticipo y un seguro de responsabilidad civil para
      posibles daños que se pudieran presentar en el condominio. Estos documentos serán
      revisados por la administración.
    </p>

    <p class="py-2">
      Algunos ejemplos de estos mantenimientos son: Lavado de cristales de altura, pintura
      exterior del edificio de altura, lavado de cisternas y tinacos, impermeabilización de azoteas
      y muros, sellado de ventanas, reparación o remplazo de tubería hidráulica, tubería de gas,
      cableado eléctrico, albañilería, etc.
    </p>

    <p class="py-2">
      La autorización para este tipo de mantenimiento se dará en una Asamblea General de
      Condominios, pues a menudo requiere cuota extraordinaria o disponer del fondo de reserva.
    </p>

    <p><strong>Mantenimiento especializado</strong></p>

    <p class="py-2">
      Consiste en el mantenimiento y reparación de equipos como elevadores, eleva autos,
      bombas de agua, plantas de emergencia, puertas automáticas, control de acceso, CCTV,
      tableros de luz, concentración de medidores, compresores de aire, medidores y tuberías
      de gas, etc. <br>
      Este mantenimiento se contrata con pólizas de servicio o por evento con visto bueno del
      Comité de Vigilancia.
    </p>

    <p><strong>Reparaciones urgentes</strong></p>
    <p class="py-2">
      Son eventualidades que no pueden esperar autorización y el administrador o cualquier
      condómino pueden realizarlas y con recursos del condominio se rembolsará el gasto
      efectuado. Algunos ejemplos son: daños a las bombas de agua o sistema automático, fugas
      de agua importantes o de gas, necesidad de contratación de pipa de agua, etc.
    </p>

    <p class="py-2">
      Cuando se requiere autorización para mantenimiento preventivo o correctivo, se presentan
      por lo menos tres cotizaciones de empresas previamente investigadas.
    </p>

    <p class="py-2">
      En virtud de lo anterior, para el primer año de operación, debemos considerar que los
      equipos electromecánicos tienen garantía, por lo que revisaremos las pólizas de
      mantenimiento con las mismas empresas que instalaron los equipos, para incluir cada gasto
      en el presupuesto del segundo año o conforme vayan venciendo las garantías y
      mantenimientos gratuitos.
    </p>
  </card-section>
</template>
<script>
import Button from '@/components/Button/Button.vue';
import CardSection from '@/components/page-services/card-section.vue';

export default {
  components: {
    CardSection,
    Button,
  },
  head: {
    title: 'Mantenimiento General | Corporativo CASHER',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Mantenimiento General | Corporativo CASHER',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Mantenimiento General | Corporativo CASHER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Mantenimiento en General preventivo y correctivo',
      },
    ],
  },
};
</script>
