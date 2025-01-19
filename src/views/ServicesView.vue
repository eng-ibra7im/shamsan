<template>
  <div>
    <ServiceCards />
  </div>
</template>

<script>
import ServiceCards from "../components/ServiceCards.vue";
import PageTitle from "../utils/PageTitle";

export default {
  name: "ServicesView",
  components: {
    ServiceCards,
  },
  mounted() {
    PageTitle("الخدمات", "Services");
  },
};
</script>

<style lang="scss" scoped></style>
