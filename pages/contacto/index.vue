<template>
  <card-section
    title="Contacta a Nuestro Equipo de Profesionales"
    header-img="contact.jpeg"
    :img-styles="{ backgroundPosition: 'right' }"
    :contact-button="false"
  >
    <p>
      Queremos saber de ti. Estamos listos para resolver tus
      dudas a la brevedad. Nos puedes contactar por diversos medios:
    </p>
    <div
      class="btn-container py-4 flex"
    >
      <a href="mailto:atencion@corporativocasher.com">
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
  </card-section>
</template>
<script>
import Icon from '@/components/Icon/Icon.vue';
import CardSection from '@/components/page-services/card-section.vue';

export default {
  components: {
    Icon,
    CardSection,
  },
  head: {
    title: 'Contacta a Nuestro Equipo | Corporativo CASHER',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contacta a Nuestro Equipo | Corporativo CASHER',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Contacta a Nuestro Equipo | Corporativo CASHER',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Estamos aquí para resolver tus dudas',
      },
    ],
  },
};
</script>
<style lang="postcss" scoped>
.btn-container {
  @apply flex-wrap items-baseline justify-center space-x-4 space-y-4;
}
</style>
