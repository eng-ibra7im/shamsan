<template>
  <div class="cards h-100 shadow-lg p-4 text-center text-lg-end rounded-5 wow bounceInUp" data-wow-duration="1.2s"
    :data-wow-delay="delay">
    <div class="d-lg-flex mb-3">
      <img :src="imageSrc" :alt="altText" width="120" height="120" class="img-fluid" loading="lazy" />
    </div>
    <div class="ms-2">
      <h3 class="fw-bold text-black mb-3 text-start">
        {{ title }}
        <span class="text-secondary"> {{ subtitle }} </span>
      </h3>
      <p class="text-ellipsed text-black-50 fs-5 fw-semibold mb-4 text-start">
        {{ description }}
      </p>
    </div>
    <button class="btn btn-secondary d-flex m-auto align-items-center gap-1 fw-bold px-3">
      {{ $t("whatWeOffer.details") }}
      <i class="bi bi-arrow-left-circle-fill" v-if="$i18n.locale === 'ar'"></i>
      <i class="bi bi-arrow-right-circle-fill" v-else></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: "service image",
    },
    delay: {
      type: String,
      default: "0.3s",
    },
  },
};
</script>

<style scoped>
/* Add any scoped CSS for the ServiceCard component */
/* animation when hover btn as light of flash */
.cards button:hover {
  transition: ease-in-out 0.3s;
  animation: light 2s infinite;
}

@keyframes light {
  0% {
    box-shadow: 0 0 0 0 var(--accent-300);
  }

  50% {
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
}
</style>
