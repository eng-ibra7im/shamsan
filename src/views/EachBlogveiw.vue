<template>
  <main class="overflow-hidden">
    <div class="head-blog mt-3 pt-3 pb-4">
      <h2 class="text-black-50 text-center animate__animated animate__slideInDown">
        كيف
        <span class="text-primary fw-bold">شمسان </span>
        أصبحت مؤسسة رائجة
      </h2>
      <p class="text-black fs-4 opacity-75 fw-medium fw-5 text-center animate__animated animate__slideInDown mb-1">
        افضل التصميمات بافضل الاسعار
      </p>
    </div>

    <section class="container mb-5">
      <div class="row g-3">
        <img src="../assets/images/p1.webp" alt="blog image" class=" w-100 " height="800" />
        <!-- div to contain content -->
        <div class="">
          <h1 class="text-black-50 fw-bold text-center mt-3 animate__animated animate__slideInDown">
            <span class="text-primary">شمسان</span> هي شركة خياطه تقدم خدمات في
          </h1>
          <small class="text-light text-center d-flex m-auto justify-content-center gap-2 mt-4">
            <NTag type="primary">قمصان</NTag>
            <NTag type="primary">بدل</NTag>
            <NTag type="primary">هودي</NTag>
            <NTag type="primary">جلباب</NTag>
          </small>
          <!-- content -->
          <p class="text-black-50 fw-semibold mt-4">
            هي مؤسسة متخصصة في إنتاج وتصميم الملابس والمنسوجات بأشكال وأحجام مختلفة. تعتمد الشركة على مهارات الحرفيين
            والتقنيات الحديثة لتحويل الأقمشة إلى منتجات تلبي احتياجات العملاء. يمكن أن تكون منتجات الشركة موجهة لعدة
            قطاعات
            هي مؤسسة متخصصة في إنتاج وتصميم الملابس والمنسوجات بأشكال وأحجام مختلفة. تعتمد الشركة على مهارات الحرفيين
            والتقنيات الحديثة لتحويل الأقمشة إلى منتجات تلبي احتياجات العملاء. يمكن أن تكون منتجات الشركة موجهة لعدة
            قطاعات
            هي مؤسسة متخصصة في إنتاج وتصميم الملابس والمنسوجات بأشكال وأحجام مختلفة. تعتمد الشركة على مهارات الحرفيين
            والتقنيات الحديثة لتحويل الأقمشة إلى منتجات تلبي احتياجات العملاء. يمكن أن تكون منتجات الشركة موجهة لعدة
            قطاعات
            هي مؤسسة متخصصة في إنتاج وتصميم الملابس والمنسوجات بأشكال وأحجام مختلفة. تعتمد الشركة على مهارات الحرفيين
            والتقنيات الحديثة لتحويل الأقمشة إلى منتجات تلبي احتياجات العملاء. يمكن أن تكون منتجات الشركة موجهة لعدة
            قطاعات
            هي مؤسسة متخصصة في إنتاج وتصميم الملابس والمنسوجات بأشكال وأحجام مختلفة. تعتمد الشركة على مهارات الحرفيين
            والتقنيات الحديثة لتحويل الأقمشة إلى منتجات تلبي احتياجات العملاء. يمكن أن تكون منتجات الشركة موجهة لعدة
            قطاعات

          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { NTag } from "naive-ui";
import PageTitle from "../utils/PageTitle";
export default {
  name: "Blogveiw",
  components: {
    NTag,
  },
  mounted() {
    PageTitle("مدونات إطلالة", "Blog");
  },
};
</script>

<style scoped>
.head-blog {
  background: #796bc81a;
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
