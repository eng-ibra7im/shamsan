<template>
  <main class="overflow-hidden">
    <div class="head-blog mt-3 pt-3 pb-4">
      <h2 class="text-light text-center animate__animated animate__slideInDown">
        أخر الاخبار من مدونات
        <span class="text-primary fw-bold">شمسان</span>
      </h2>
      <p
        class="text-white opacity-75 fw-medium fw-5 text-center animate__animated animate__slideInDown mb-1"
      >
        افضل التفصيلات اليدويه  بافضل الاسعار
      </p>
    </div>
    <section class="container">
      <div class="mt-3">
        <div class="row">
          <div class="col-6 col-lg-4 d-flex flex-column gap-3">
            <img
            src="../assets/images/p3.webp"
            alt="blog name"
              class="img-fluid rounded-3 "
            />
            <img
            src="../assets/images/p4.jpg"
            alt="blog name"
              class="img-fluid rounded-3"
            />
          </div>
          <div class="col-6 col-lg-4 d-flex flex-column gap-3">
            <img
              src="../assets/images/p2.webp"
              alt="blog name"
              class="img-fluid rounded-3"
            />
            <img
              src="../assets/images/p1.webp"
              alt="blog name"
              class="img-fluid rounded-3"
            />
            
          </div>
          <div class="col-12 col-lg-4  d-flex flex-column gap-3 ">
            <img
              src="../assets/images/p5.jpg"
              alt="blog name"
              class="img-fluid rounded-3"
            />

            <span class="fw-semibold small text-light">
              <!-- icon bi -->
              <i class="bi bi-calendar3"></i>
              19 ابريل
            </span>
            <h2 class="text-light">
              تاثير الالوان
              <span class="text-primary fw-bold">علي البراند </span>
            </h2>
            <p class="text-white fw-medium small opacity-75">
              هنا مثال نص مختصر يمكن ان يوضع هنا مثال نص يمكن ان يوضع هنا مثال نص يمكن ان
              يوضع هنا مثال نص يمكن ان يوضع هنا مثال نص يمكن ان يوضع هنا مثال نص مختصر
              يمكن ان يوضع هنا مثال نص يمكن ان يوضع هنا مثال نص يمكن ان يوضع هنا مثال نص
              يمكن ان يوضع هنا مثال نص يمكن ان يوضع
            </p>
            <div class="d-flex align-items-center justify-content-center mb-4">
              <n-tag :bordered="true" type="primary" round> التصميم </n-tag>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5 wow bounceInUp">
      <h2 class="text-light text-center mt-3">
        جميع
        <span class="text-primary fw-bold">المدونات لدينا</span>
      </h2>
      <p class="text-white opacity-75 fw-medium fw-5 text-center">
        افضل الملابس الحصريه  بافضل الاسعار
      </p>
      <div class="d-flex align-items-center justify-content-center flex-wrap gap-3">
        <n-tag :bordered="true" type="primary" round> هودي </n-tag>
        <n-tag :bordered="true" type="primary" round> قمصان </n-tag>
      </div>
    </div>

    <section class="container mt-3 mb-5">
      <div class="row g-3">
        <EachBlog />
        <EachBlog />
        <EachBlog />
        <EachBlog />
        <EachBlog />
        <EachBlog />
      </div>
    </section>
  </main>
</template>

<script>
import { NTag } from "naive-ui";
import EachBlog from "../components/EachBlog.vue";
import PageTitle from "../utils/PageTitle";
export default {
  name: "Blogveiw",
  components: {
    EachBlog,
    NTag,
  },
  mounted() {
    PageTitle("مدونات شمسان", "Blog");
  },
};
</script>

<style scoped>
.head-blog {
  background: #100f0f1a;
}

.btn-primary {
  background-color: var(--secondary) !important;
  color: #ffffff !important;
  border-color: var(--accent-300) !important;
}

/* hover */
.btn-primary:hover {
  background-color: var(--accent-300) !important;
  color: #ffffff !important;
  border-color: var(--accent-300) !important;
}

.text-ellipsed {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
