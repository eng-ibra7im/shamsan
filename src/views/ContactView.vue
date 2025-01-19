<template>
  <div class="container mb-5">
    <ContactUs />
  </div>
</template>

<script>
import ContactUs from "../components/ContactUs.vue";
import PageTitle from "../utils/PageTitle";
export default {
  components: { ContactUs },
  mounted() {
    PageTitle("تواصل معنا", "Contact Us");
  },
};
</script>

<style lang="scss" scoped>
</style>
