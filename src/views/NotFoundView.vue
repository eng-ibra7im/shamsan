<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 text-center">
        <img
          src="../assets/images/logo.webp"
          :alt="$t('notFound.altText')"
          class="img-fluid m-auto"
          width="150"
          height="150"
          :title="$t('notFound.altText')"
        />
        <h1 class="text-light display-2 fw-bold">404</h1>
        <h2 class="text-light">{{ $t("notFound.title") }}</h2>
        <p class="text-muted">{{ $t("notFound.message") }}</p>
        <RouterLink
          to="/"
          class="btn btn-primary mt-3 m-auto"
          :title="$t('notFound.backToHome')"
          :aria-label="$t('notFound.backToHome')"
          :name="$t('notFound.backToHome')"
        >
          {{ $t("notFound.backToHome") }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../utils/PageTitle";
export default {
  name: "NotFoundView",
  mounted() {
    PageTitle("الصفحة غير موجودة", "Page Not Found");
  },
};
</script>

<style scoped></style>
