<template>
  <div>
    <img
      src="~/assets/img/cleaners-group.jpeg"
      alt="people cleaning"
      class="md:rounded-b-xl"
    >
    <section class="relative px-4" style="margin-top: -2rem">
      <div class="w-4/5 md:w-3/4 mx-auto bg-white rounded-xl p-4 shadow-md">
        <img
          src="~/assets/img/casher-logo-full.png"
          alt="casher logo"
          width="200"
          class="mx-auto"
        >
        <p class="my-4">
          Estamos dedicados al cuidado de su residencia, industrial, comercial,
          hospitales, instituciones educativas, edificios. Ayudando al control
          sanitario para garantizar la seguridad, higiene y tranquilidad de
          todos. Ofrecemos la mejor calidad en productos y precios del mercado
          con garantía y productos naciones e internacionales
        </p>
      </div>
    </section>
    <!-- Todos Nuestros Rubros -->
    <section class="pt-10 md:pt-16 px-2">
      <h3 id="services" class="text-lg">
        Todos Nuestros Rubros
        <hr class="border-t-2 w-16 ml-4">
      </h3>
      <div class="flex flex-wrap py-4 gap-4 justify-center">
        <a
          v-for="service in services"
          :key="service.link"
          :href="service.link"
          class="
            p-4
            rounded-xl
            shadow-md
            hover:shadow-2xl
            max-w-xs
            bg-white
            self-start
          "
        >
          <img
            :src="resolve(service.icon)"
            :alt="service.text"
            class="mx-auto"
          >
          <p class="w-24 text-center" v-text="service.text" />
        </a>
      </div>
    </section>
    <!-- Jardineria -->
    <section class="pt-12 px-4">
      <h3 class="text-lg pb-4 uppercase">
        Jardinería
        <hr class="border-t-2 w-16 ml-4">
      </h3>
      <service-section
        title="Lo hacemos con un enfoque profesional y responsable con el medio ambiente"
        img="gardener.jpeg"
        alt="jardineria"
      >
        <p class="py-4">
          <strong>Poda de árboles y palmas:</strong>
          eliminación de ramas que se rozan entre sí, que interfieran con
          cables, ramas muertas, ramas dañadas.
        </p>
        <p class="py-4">
          <strong>Mantenimiento de jardines:</strong>
          poda de pasto, de arbustos, programa de fertilización, control de
          plagas, limpieza de zona de trabajo, retiro de residuos orgánicos o
          productos de trabajo.
        </p>
        <p class="py-4">
          <strong>Instalación:</strong> de flores y plantas de temporada
        </p>
      </service-section>
    </section>
    <!-- Vigilancia -->
    <section class="pt-12 px-4">
      <h3 class="text-lg pb-4 uppercase">
        Vigilancia
        <hr class="border-t-2 w-16 ml-4">
      </h3>
      <service-section
        title="La seguridad es primero"
        img="security.jpeg"
        alt="vigilancia"
      >
        <p class="py-4">
          Personal de seguridad. Vigilancia en lugares en oficinas, residencial,
          clubs, comercial, industria,manufacturera, construcción, instituciones
          financieras y bancarias, centros sociales, eventos políticos, hotelería,
          aeropuerto dependencias públicas y gobierno, trasporte, con y sin arma de
          fuego. Cursos y seminarios, monitoreo con circuito cerrado, alarmas,
          sistema satelital, perros de protección y custodia, investigaciones privadas,
        </p>
      </service-section>
    </section>
    <!-- Insumos -->
    <section class="pt-12 px-4">
      <h3 class="text-lg pb-4 uppercase">
        Insumos
        <hr class="border-t-2 w-16 ml-4">
      </h3>
      <service-section
        title="Tenemos los productos que tu empresa necesita"
        img="supplies.jpeg"
        alt="Insumos"
      >
        <p class="py-4">
          El regreso al trabajo presencial después del confinamiento por la pandemia está
          cada vez más cerca, y como responsable del área debe asegurarse de que sus colaboradores
          y clientes trabajen en un sitio seguro y limpio para evitar contagios y la propagación del virus.
        </p>
        <p><strong>Insumos nueva normalidad:</strong></p>
        <ul class="list-inside list-disc py-4">
          <li>Alcohol en gel en dispensadores</li>
          <li>Toallitas desinfectantes</li>
          <li>Cubrebocas</li>
          <li>Medidores de temperatura</li>
          <li>Basureros y dispensadores sin contacto</li>
          <li>Purificadores portátiles</li>
          <li>Mamparas y cubículos</li>
          <li>Tapetes desinfectantes</li>
        </ul>
      </service-section>
    </section>
    <!-- Contacto -->
    <section class="pt-12 px-4">
      <h3 class="text-lg pb-4 uppercase">
        Contacta a Nuestro Equipo
        <hr class="border-t-2 w-16 ml-4">
      </h3>
      <card class="w-10/12 md:w-3/5 mx-auto">
        <p>
          Queremos saber de ti. Estamos listos para resolver tus
          dudas a la brevedad. Nos puedes contactar por diversos medios:
        </p>
        <div
          class="py-4 flex flex-wrap items-baseline justify-center space-x-4 space-y-4"
        >
          <a href="mailto:hola@corporativocasher.com">
            <Button css="bg-blue text-center">
              <Icon icon-name="email" />
              E-mail
            </Button>
          </a>
          <a href="tel:+528123213805">
            <Button css="bg-blue text-center">
              <Icon icon-name="phone" />
              Llámanos
            </Button>
          </a>
          <a href="https://wa.link/q02fr2">
            <Button css="bg-blue text-center">
              <Icon icon-name="whatsapp" />
              WhatsApp
            </Button>
          </a>
        </div>
      </card>
    </section>
  </div>
</template>
<router>
{
  alias: ['/home']
}
</router>
<script>
import { services } from '@/assets/services';
import Card from '@/components/Card/Card.vue';
import ServiceSection from '@/components/page-home/service-section.vue';

export default {
  components: {
    Card,
    ServiceSection,
  },
  data () {
    return { services };
  },
  methods: {
    resolve (iconName) {
      return require(`~/assets/icons/${iconName}`);
    },
  },
};
</script>

<style>
</style>
