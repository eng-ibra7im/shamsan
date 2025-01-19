<template>
  <section class="container mt-5 mb-3">
    <div class="row d-flex align-items-center">
      <AboutUs />
    </div>
  </section>
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import PageTitle from "../utils/PageTitle";
export default {
  components: { AboutUs },
  mounted() {
    PageTitle("من نحن", "About Us");
  },
};
</script>

<style lang="scss" scoped></style>
