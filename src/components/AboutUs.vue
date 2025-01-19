<template>
     <div class="container">
      <div class="row pb-0 mt-5 gap-lg-3">
        <div class="col-lg-6 col-md-6 mt-0 mt-lg-5 mb-5 mb-md-0 order-1 order-md-0">
          <h1 class="text-light fw-bold display-5 mb-2 text-center text-md-start" v-html="$t('about_us.title')"></h1>
          <p class="text-light fs-5 mt-4 text-center text-md-start">
            {{ $t("about_us.description") }}
          </p>
          <div class="d-flex align-items-center justify-content-center justify-content-md-start w-auto me-auto">
            <a href="/"
              class="btn btn-primary rounded-1 pt-2 pb-2 mt-3 text-center text-md-start animate__animated animate__slideInUp animate__slower 2s"
              title="استشارة مجانية" aria-label="استشارة مجانية" target="_blank" rel="noopener noreferrer">
              {{ $t("nav.freeConsultation") }}
            </a>
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <img src="../assets/images/khyata.png" alt="moon"
            class="img-fluid  rounded-5 animate__animated animate__slideInDown animate__slower 2s" title="moon"
            style="max-width: 100% ; height: auto; border-radius: 1.4rem;" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}

</style>
