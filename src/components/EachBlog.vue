<template>
  <RouterLink
    to="/blog/1"
    class="col-md-6 col-lg-4"
    :title="`اقرأ المزيد عن اهمية التخطيط التسويقي`"
    :aria-label="`اقرأ المزيد عن اهمية التخطيط التسويقي`"
  >
    <div class="card pb-2 shadow-lg rounded-5">
      <img src="../assets/images/p2.webp" alt="blog image" class="imgfluid w-100 " height="300"  />
      <div class="pt-0 px-2 px-md-3 pb-0">
        <h3 class="fw-bold text-primary"> اطلب التصميم المناسب لك </h3>
        <p class="fw-medium text-light fs-6 text-ellipsed">
          نص تجريبي يمكن ان يستبدل نص تجريبي يمكن ان يستبدل نص تجريبي يمكن ان يستبدل نص
          تجريبي يمكن ان يستبدلنص تجريبي يمكن ان يستبدل نص تجريبي يمكن ان يستبدلنص تجريبي
          يمكن ان يستبدل نص تجريبي يمكن ان يستبدل
        </p>
        <div class="d-flex align-items-center justify-content-center mt-3">
          <n-tag :bordered="true" type="primary" round> اطلب التصميم </n-tag>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
import { NTag } from "naive-ui";

export default {
  name: "EachBlog",
  components: {
    NTag,
  },
};
</script>

<style scoped>
.card {
  background-color: #1e1e30;
}

.rounded-5 {
  border-radius: 1.5rem;
}
</style>
