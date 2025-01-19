<template>
  <div class="text-center my-4 wow bounceInUp" data-wow-duration="1.2s" data-wow-delay="0.3s">
    <div class="d-flex justify-content-center align-items-center flex-wrap">
      <a href="#" title="السابق" aria-label="السابق">
        <img src="../assets/images/prev.webp" alt="prev arrow" class="img-fluid w-100 wow bounceInUp"
          data-wow-duration="1.4s" data-wow-delay="0.3s" loading="lazy" title="السابق" width="50" height="50" /></a>
      <h3 class="fw-bold text-secondary fs-1 ms-3 me-3">{{ $t("whatWeOffer.heading") }}</h3>
      <a href="#" title="التالي" aria-label="التالي">
        <img src="../assets/images/next.webp" alt="next arrow" class="img-fluid w-100 wow bounceInUp"
          data-wow-duration="1.4s" data-wow-delay="0.3s" loading="lazy" title="التالي" width="50" height="50" /></a>
    </div>
    <p class="fw-semibold text-black-50 fs-4 wow bounceInUp" data-wow-duration="1.4s" data-wow-delay="0.4s">
      {{ $t("whatWeOffer.description") }}
    </p>
  </div>

  <section class="container mb-5">
    <div class="row g-3">
      <div class="col-lg-4 col-md-6" v-for="(service, index) in services" :key="index">
        <ServiceCard :title="$i18n.locale == 'ar' ? service.title.ar : service.title.en"
          :subtitle="$i18n.locale == 'ar' ? service.subtitle.ar : service.subtitle.en" :description="$i18n.locale == 'ar' ? service.description.ar : service.description.en
            " :imageSrc="service.imageSrc" :altText="$i18n.locale == 'ar' ? service.altText.ar : service.altText.en"
          :delay="service.delay" />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";

export default {
  name: "ServiceCards",
  components: {
    ServiceCard,
  },
  data() {
    return {
      services: [
        {
          title: {
            ar: "تصميم قميص ",
            en: "Shirt Details"
          },
          subtitle: {
            ar: "( الأناقة والراحة )",
            en: "Elegance and Comfort"
          },
          description: {
            ar: "قميص عالي الجودة مصمم بأحدث صيحات الموضة ليمنحك مظهراً أنيقاً وشعوراً مريحاً.",
            en: "A high-quality shirt designed with the latest fashion trends to provide you with a stylish look and ultimate comfort."
          },
          imageSrc: "/p1 (2).jpg",
          altText: {
            ar: "تفاصيل القميص",
            en: "Shirt Details"
          },
          delay: "0.3s",
        },
        {
          title: {
            ar: "تصميم بدل ",
            en: "Suit Details"
          },
          subtitle: {
            ar: "( الأناقة والرقي )",
            en: "Elegance and Sophistication"
          },
          description: {
            ar: "بدلة فاخرة مصممة بدقة لتناسب جميع المناسبات الرسمية وتمنحك إطلالة راقية.",
            en: "A luxurious suit meticulously crafted to suit all formal occasions and give you a refined look."
          },
          imageSrc: "/p1 (3).jpg",
          altText: {
            ar: "تفاصيل البدلة",
            en: "Suit Details"
          },
          delay: "0.3s",
        },
        {
          title: {
            ar: "تصميم هودي",
            en: "Hoodie Details"
          },
          subtitle: {
            ar: "(  الراحة والأسلوب )" ,
            en: "Comfort and Style"
          },
          description: {
            ar: "هودي أسود أنيق مصنوع من خامات عالية الجودة ليمنحك مظهراً عصرياً وإحساساً بالدفء.",
            en: "A sleek black hoodie made from high-quality materials, offering a modern look and cozy warmth."
          },
          imageSrc: "/p1 (1).jpg",
          altText: {
            ar: "تفاصيل الهودي الأسود",
            en: "Black Hoodie Details"
          },
          delay: "0.3s",
        },
        {
          title: {
            ar:  "تصميم جلباب سعودي",
            en: "Saudi Thobe Details"
          },
          subtitle: {
            ar: "(الأصالة والفخامة )",
            en: "Tradition and Elegance"
          },
          description: {
            ar: "جلباب سعودي أصيل مصنوع من أجود الأقمشة ليجمع بين الراحة والأناقة في المناسبات اليومية والرسمية.",
            en: "An authentic Saudi thobe made from the finest fabrics, combining comfort and elegance for both casual and formal occasions."
          },
          imageSrc: "/p1 (5).jpg",
          altText: {
            ar: " (تفاصيل الجلباب السعودي ) ",
            en: "Saudi Thobe Details"
          },
          delay: "0.3s",

        },
        {
          title: {
            ar: "تصميم جلباب ",
            en: "Saudi Thobe Details"
          },
          subtitle: {
            ar: "( الأصالة والفخامة )" ,
            en: "Tradition and Elegance"
          },
          description: {
            ar: "جلباب  أصيل مصنوع من أجود الأقمشة ليجمع بين الراحة والأناقة في المناسبات اليومية والأناقة في المناسبات اليومية  والرسمية.",
            en: "An authentic Saudi thobe made from the finest fabrics, combining comfort and elegance for both casual and formal occasions."
          },
          imageSrc: "/p1 (6).jpg",
          altText: {
            ar: "تفاصيل الجلباب السعودي",
            en: "Saudi Thobe Details"
          },
          delay: "0.3s",
        },
        {
          title: {
            ar: "تصميم احدث البدل  ",
            en: "Modern Suit Details"
          },
          subtitle: {
            ar: "( الأناقة العصرية ) ",
            en: "Contemporary Elegance"
          },
          description: {
            ar: "بدلة حديثة مصممة بأحدث الأساليب لتوفير مظهر أنيق وعصري، مع تفاصيل دقيقة تجعلها مثالية للمناسبات الرسمية وغير الرسمية.",
            en: "A modern suit designed with the latest trends to provide a stylish and contemporary look, with fine details that make it perfect for both formal and casual occasions."
          },
          imageSrc: "/p1 (7).jpg",
          altText: {
            ar: "تفاصيل البدلة الحديثة",
            en: "Modern Suit Details"
          },
          delay: "0.3s",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cards {
  border: 2px solid var(--accent-200);
}

.rounded-5 {
  border-radius: 1.5rem;
}
</style>
