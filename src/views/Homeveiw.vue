<template>
  <main class="overflow-hidden">
    <div class="container">
      <div class="row pb-0 mt-5 gap-lg-3">
        <div class="col-lg-6 col-md-6 mt-0 mt-lg-5 mb-5 mb-md-0 order-1 order-md-0">
          <h1 class="text-black fw-bold display-5 mb-2 text-center text-md-start" v-html="$t('about_us.title')"></h1>
          <p class="text-black-50 fs-5 mt-4 text-center text-md-start">
            {{ $t("about_us.description") }}
          </p>
          <div class="d-flex align-items-center gap-2 justify-content-center justify-content-md-start w-auto me-auto">
            <a href="/"
              class="btn btn-primary rounded-1 pt-2 pb-2 mt-3 text-center text-md-start animate__animated animate__slideInUp animate__slower 2s"
              title="استشارة مجانية" aria-label="استشارة مجانية" target="_blank" rel="noopener noreferrer">
              {{ $t("nav.freeConsultation2") }}
            </a>
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

    <div class="text-center my-5 wow bounceInUp" data-wow-duration="1.2s" data-wow-delay="0.3s">
      <div class="d-flex justify-content-center align-items-center flex-wrap">
        <h3 class="fw-bold text-secondary fs-1 ms-3 me-3">خدماتنا متعددة</h3>
      </div>
      <p class="fw-semibold text-black-50 fs-3 wow bounceInUp" data-wow-duration="1.4s" data-wow-delay="0.4s">
        تمتع معنا بالعديد من الخدمات المتقدمة
      </p>
    </div>

    <section class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 ">
          <div class="cards h-100 shadow-lg p-3 rounded-5 wow bounceInUp" data-wow-duration="1.2s"
            :data-wow-delay="delay" style="border-radius: 0.5rem;">
            <div class="d-lg-flex mb-4 justify-content-center">
              <img src="../assets/images/machinee.jpg" alt="altText" width="120" height="120" class="img-fluid"
                loading="lazy" style="border-radius: 0.8rem;" />
            </div>
            <div class="ms2">
              <h4 class="fw-bold text-black mb3 text-center">
                تصميم اجود الملابس والجلباب
              </h4>
              <p class="text-ellipsed text-black-50 mb4 text-center">
                مصنعنا متخصص في تصميم وتصنيع الجلابيب بأعلى معايير الجودة والدقة. نقدم تشكيلة واسعة من الجلابيب التي
                تتميز بالأناقة والراحة لتناسب جميع الأذواق والمناسبات.
              </p>
              <ul class="text-black">
                <li>
                  <caption>مميزات مصنعنا:</caption>
                  <ul>
                    <li>جودة الخامات: نستخدم أفضل أنواع الأقمشة لضمان المتانة</li>
                    <li>تنوع التصاميم: نقدم تصاميم كلاسيكية وعصرية.</li>
                    <li>دقة التصنيع: نعتمد على أحدث التقنيات وخطوط الإنتاج المتطورة لتحقيق أفضل النتائج.
                    </li>
                    <li>الاهتمام بالتفاصيل: نهتم بأدق التفاصيل في التطريز والخياطة لضمان منتجات متميزة.
                    </li>
                    <li>أسعار تنافسية: نوفر جودة عالية بأسعار مناسبة للجميع.
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="text-black">
                <li>
                  <caption> لماذا فريق شمسان الأفضل؟
                  </caption>
                  <ul>
                    <li>
                      التدريب المستمر: نحرص على تدريب فريقنا بانتظام على أحدث تقنيات القص والخياطة.
                    </li>
                    <li>
                      الاهتمام بالتفاصيل: نؤمن بأن التفاصيل تصنع الفرق، وفريقنا ملتزم بتحقيق الكمال في كل قطعة.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 ">
          <div class="cards h-100 shadow-lg p-3 rounded-5 wow bounceInUp" data-wow-duration="1.2s"
            :data-wow-delay="delay" style="border-radius: 0.5rem;">
            <div class="d-lg-flex mb-4 justify-content-center">
              <img src="../assets/images/toire.jpg" alt="altText" width="120" height="120" class="img-fluid"
                loading="lazy" style="border-radius: 0.8rem;" />
            </div>
            <div class="ms2">
              <h4 class="fw-bold text-black mb3 text-center">
                قصاصون وخياطون مؤسسة شمسان للخياطة
              </h4>
              <p class="text-ellipsed text-black mb4 text-center">
                في مصنع شمسان للخياطة، نفتخر بفريقنا المتميز من القصاصين والخياطين الذين يمثلون جوهر عملياتنا وأساس
                نجاحنا. يتم اختيار فريق العمل لدينا بعناية فائقة لضمان تقديم منتجات ذات جودة استثنائية تعكس التزامنا
                بالكمال والتميز.
              </p>
              <ul class="text-black">
                <caption>
                  مواصفات فريق العمل في مصنع شمسان:
                </caption>
                <li>
                  <ul class="mt-1">
                    <caption>
                      1- القصاصون المحترفون:
                    </caption>
                    <li>يتمتعون بخبرة طويلة في قص الأقمشة بدقة متناهية وفقًا للتصميمات المطلوبة.
                    </li>
                    <li>يستخدمون أحدث تقنيات وأدوات القص لضمان تقليل الهدر وتحقيق أقصى استفادة من المواد الخام.
                    </li>
                  </ul>
                </li>
                <li>
                  <ul class="mt-2">
                    <caption>
                      2- الخياطون المهرة:
                    </caption>
                    <li>
                      خبراء في فن الخياطة، يجمعون بين المهارة التقليدية والتقنيات الحديثة.
                    </li>
                    <li>
                      يعملون بحرفية عالية لضمان تناغم الخياطة والتفاصيل النهائية مع التصميمات.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 ">
          <div class="cards h-100 shadow-lg p-3 rounded-5 wow bounceInUp" data-wow-duration="1.2s"
            :data-wow-delay="delay" style="border-radius: 0.5rem;">
            <div class="d-lg-flex mb-4 justify-content-center">
              <img src="../assets/images/logo.webp" alt="altText" width="120" height="80" class="imgfluid"
                loading="lazy" style="border-radius: 0.8rem;" />
            </div>
            <div class="ms2">
              <h4 class="fw-bold text-black mb3 text-center">
                شمسان اونلاين
              </h4>
              <p class="text-ellipsed text-black mb4 text-center">
                في شركة شمسان للخياطة، نواكب التطورات التكنولوجية لضمان تلبية احتياجات عملائنا بكل سهولة وسرعة. ندرك
                أهمية الإنترنت في توسيع نطاق خدماتنا والوصول إلى عملائنا في كل مكان، ولهذا قمنا بتطوير وجود قوي عبر
                الإنترنت يعكس احترافيتنا وجودة منتجاتنا.
              </p>
              <ul class="text-black">
                <li>
                  <caption>
                    1- الموقع الإلكتروني الخاص بشركة شمسان:
                  </caption>
                  <ul class="my-1">
                    <li>
                      تصميم مميز وسهل الاستخدام: يوفر الموقع واجهة مستخدم مريحة تتيح للعملاء تصفح المنتجات واختيار
                      التصاميم بكل سهولة.
                    </li>
                    <li>
                      عرض المنتجات: يحتوي الموقع على قائمة شاملة بالجلابيب والمنتجات التي نصنعها مع وصف تفصيلي لكل قطعة
                      وصورها.
                    </li>
                  </ul>
                </li>
                <li>
                  <caption>
                    1- الخدمات الإلكترونية المميزة:
                  </caption>
                  <ul class="mt-1">
                    <li>
                      الطلب عبر الإنترنت: يوفر الموقع خدمة الطلب الإلكتروني، حيث يمكن للعملاء تقديم طلباتهم من أي مكان
                      وفي أي وقت.
                    </li>
                    <li>
                      خدمة تتبع الطلبات: بمجرد تقديم الطلب، يمكن للعميل متابعة حالة طلبه خطوة بخطوة عبر الموقع.
                    </li>

                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="row pb-0 mt-5 gap-lg-3">
        <div class="col-lg-6 col-md-6 mt-0 mt-lg-5 mb-5 mb-md-0 order-1 order-md-0">
          <h2>من نحن</h2>
          <h5 class="text-black fw-bold display-5 mb-2 text-center text-md-start mt-2">
            برامج حسابات تساهم في نجاح مشروعك!
          </h5>
          <p class="text-black-50 fs-5 mt-4 text-center text-md-start">
            نحن شركة برمجيات، وموظفونا متحمسون للغاية للعمل. يبقى مصممونا في الصدارة لتقديم تصميمات جذابة وسهلة
            الاستخدام لجعل عملك متميزًا وفريدًا. يلتزم مطورونا بالحفاظ على أعلى معايير الأمان والجودة، ومواكبة كل تغيير
            لضمان بقاء منتجاتنا رائعة على مر الزمن. نحن نهتم بعملك، ولهذا نعمل معك عن كثب لتحقيق النجاح.
          </p>
          <div class="d-flex align-items-center gap-2 justify-content-center justify-content-md-start w-auto me-auto">
            <a href="/"
              class="btn btn-primary rounded-1 fs-4 pt-2 pb-2 mt-3 text-center text-md-start animate__animated animate__slideInUp animate__slower 2s"
              title="استشارة مجانية" aria-label="استشارة مجانية" target="_blank" rel="noopener noreferrer">
              تواصل معنا
              <i class="bi bi-headphones"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 mt-5 text-dark ">
          <div class="d-flex">
            <div class="d-flex flex-column text-center  border-end p-2">
              <div class="me-4">
                <h1 class="fw-bold">+20</h1>
                <p class="fw-bold fs-3"> دولة</p>
              </div>
            </div>
            <p class="text-center  fs-5 text-black d-flex ms-2 justify-content-center align-items-center ">
              Z4U للبرمجيات توفر خدمات وبرامج الحسابات و ERP في جميع دول الوطن العربي والشرق الأوسط، بعدة لغات منها
              العربية والإنجليزيه</p>
          </div>
          <div class="d-flex mt-3">
            <div class="d-flex flex-column text-center  border-end p-2">
              <div class="me-4">
                <h1 class="fw-bold">+50</h1>
                <p class="fw-bold fs-3"> درس</p>
              </div>
            </div>
            <p class="text-center  fs-5 text-black d-flex ms-2 justify-content-center align-items-center ">
              دورات تدريبية بالصوت والصورة للتسهيل علي عملاءنا و توفير لهم الدعم المناسب في أي وقت بصوره المرئية
              المتعددة.
            </p>
          </div>
          <div class="d-flex mt-3">
            <div class="d-flex flex-column text-center  border-end p-2">
              <div class="me-4">
                <h1 class="fw-bold">+99</h1>
                <p class="fw-bold fs-4">تخصص</p>
              </div>
            </div>
            <p class="text-center  fs-5 text-black d-flex ms-2 justify-content-center align-items-center ">
              منتجاتنا تخدم عشرات التخصصات المحاسبية وادارة المخزون، البيع الالكتروني، ادارة المبيعات، المخازن، المحلات
              والمعارض وغيرها..
            </p>
          </div>
        </div>
      </div>
    </div>

    <ServiceCards />
    <div class="mt-5 text-center mb-3">
      <RouterLink to="/services" class="btn btn-primary rounded-1 pt-2 pb-2" :title="$t('whatWeOffer.seeMore')"
        :aria-label="$t('whatWeOffer.seeMore')">
        <!-- icon -->
        <i class="bi bi-arrow-right-circle-fill"></i>
        {{ $t("whatWeOffer.seeMore") }}
      </RouterLink>
    </div>

    <div class="container">
      <div class="row pb-0 mt-5 gap-lg-3">
        <div class="col-lg-6 col-md-6">
          <img src="../assets/images/feat1.webp" alt="moon"
            class="img-fluid  rounded-5 animate__animated animate__slideInDown animate__slower 2s" title="moon"
            style="max-width: 100% ; height: auto; border-radius: 1.4rem;" />
        </div>
        <div class="col-lg-5 col-md-6 mt-0 mt-lg-5 mb-5 mb-md-0 order-1 order-md-0">
          <span class="text-black fw-bold fs-4 display-5 mb-2 text-center text-md-start">
            نسعي لراحة موظفيك
          </span>
          <h2 class="fw-bold fs-1">
            لا شئ افضل من ان تعمل بدون اي ضغوط
          </h2>
          <p class="text-black-50 fs-5  fw-semibold mt-3 text-center text-md-start">
            لن تحقق المزيد من النجاح في مشروعك دون العمل في بيئة مريحة ، برنامج ERP يهيئ لك بيئة عمل مريحة وجذابة تشجعك
            علي مواصلة العمل في سعادة و مرونة. </p>
          <p class="text-black-50 fs-5  fw-semibold mt-3 text-center text-md-start">
            قصة نجاحك المزهلة تبدأ من هنا ، انضم الينا في شركة برمجيات Z4U لتصبح جزء منا واعطي مشروعك الفرصة لانه
            يستحق..
          </p>
          <div class="d-flex flex-column fw-semibold ">
            <p>انتاجية العملاء بعد استخدام منتجاتنا</p>
            <div class="progress-bar">
              <div class="progress-fill" id="progress-fill"></div>
            </div>
          </div>
          <div class="d-flex flex-column mt-3 fw-semibold">
            <p>انتاجية العملاء قبل استخدام منتجاتنا</p>
            <div class="progress-bar">
              <div class="progress-fill" id="progress-fill2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ABOUT p-5">
      <div class="container">
        <div class="text-center text-white-50">
          <h1 class="text-white">
            Z4U حلت مشكلتك بنجاح!​
          </h1>
          <P class="fw-semibold mt-3 fs-4">
            منتجات شركتنا Z4U تنظم لك كل شئ ، تزيد ارباحك ، تقدم لك تقارير شاملة ، حسابات دقيقة جداً ، احصائيات
            ولوحة تحكم متعددة المهام. فإذا كانت شركتك متوسطة او كبيرة في الحجم . وخاصة اذا كنت تحتاج ادارة مخزون وحسابات
            عامة و حسابات البنوك والفيزا و البيع بالأجل و شئون العاملين وحسابات العملاء و الموردين فبالتأكيد ستحتاج نظام
            دقيق و برنامج شامل. وهنا تستطيع ان تعتمد علينا فأنظمتنا تمكنك من اجراء اي آمر بدون استخدام الموس نهائياً .​
          </P>
          <P class="fw-semibold mt-3 fs-4">
            لدينا الافضلية في كل شئ اذا كنت تبحث عن برنامج حسابات . يحدد مصير ونجاح مشروعك . ويوفر لك تقارير واحصائيات
            كافية وشاملة . ويجمع كل البرامج الفرعية مثل برنامج مخازن ، برنامج العملاء ، برنامج الموردين ، برنامج
            المشتريات ، برنامج المبيعات ، برنامج الشيكات ، برنامج البنوك و برنامج شئون العاملين في برنامج واحد ، واذا
            كنت تبحث عن موقع الكتروني يتحدث عن شركتك ويحتوي علي كل متطلبات مجال عملك في السوق و متطلبات عملاءك فيجب ان
            تبتدي من هنا. أعتمدت شركة برمجيات Z4U على البساطة في تصميم برامجها .. فأنت تستطيع البدأ والعمل على
            أي برامج من منتجاتنا في غضون دقائق بدون اي مشقه لذا فبكل فخر لدينا أفضل برنامج محاسبي عربي
          </P>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row pb-0 mt-5 gap-lg-3">
        <div class="col-lg-5 col-md-6 mt-0 mt-lg-5 mb-5 mb-md-0 order-1 order-md-0">
          <span class="text-black fw-bold fs-4 display-5 mb-2 text-center text-md-start">
            أسئلة وآجوبة
          </span>
          <h1 class="fw-bold ">
            الآسئلة الشائعة واجاباتها
          </h1>
          <div class="d-flex flex-column">
            <p class="d-inline-flex gap-1 mt-3">
              <a class="btn align-items-center fw-semibold fs-4" data-bs-toggle="collapse" href="#collapseExample"
                role="button" aria-expanded="false" aria-controls="collapseExample">
                هل لديكم منتجات برمجية جاهزة؟
                <span>
                  <i class="bi bi-caret-down-fill"></i>
                </span>
              </a>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body text-white">
                نعم لدينا برنامج سيلز اب لادارة المخازن والمبيعات، وبرنامج فارما اب لادارة الصيدليات ومخازن الادوية،
                وبرنامج تاتش اب لادارة محلات الصيانة ومبيعاتها (اوشك علي الانطلاق)، وعدة منتجات خدمية اخري.
                كما اننا نقوم بانشاء انظمة من الصفر تناسب احتياج مؤسستك تبعاً لمتطلباتك.
              </div>
            </div>

            <p class="d-inline-flex gap-1 ">
              <a class="btn align-items-center fw-semibold fs-4" data-bs-toggle="collapse" href="#collapseExample2"
                role="button" aria-expanded="false" aria-controls="collapseExample2">
                هل يمكنني الدفع اونلاين؟
                <span>
                  <i class="bi bi-caret-down-fill"></i>
                </span>
              </a>
            </p>
            <div class="collapse" id="collapseExample2">
              <div class="card card-body text-white">
                نعم ندعم الدفع اونلاين ، كما اننا وظفنا فريق كامل لخدمتك ومساعدتك في اجراء عملية الشراء من علي موقعنا
                الالكتروني.
              </div>
            </div>

            <p class="d-inline-flex gap-1 ">
              <a class="btn align-items-center fw-semibold fs-4" data-bs-toggle="collapse" href="#collapseExample3"
                role="button" aria-expanded="false" aria-controls="collapseExample3">
                ما هي طرق الدفع المتوفرة؟
                <span>
                  <i class="bi bi-caret-down-fill"></i>
                </span>
              </a>
            </p>
            <div class="collapse" id="collapseExample3">
              <div class="card card-body text-white">
                <p>
                  ندعم عدة طرق للدفع للتسهيل علي عملاءنا أولا : الدفع الفوري والتفعيل الفوري اونلاين 1- باي بال 2-
                  الفيزا والماستر كارت /بطاقات الدفع
                </p>
                <p>
                  ثانياً : الحوالات اليدوية 3- الحوالة البنكية 4- بايونير Payoneer , ويسترن يونيون وخدمات الدفع الاخري
                </p>
                <p>
                  فور اتمام عملية الدفع سيظهر كود الترخيص في حسابك وستصلك فاتورة علي بريدك الالكتروني.
                </p>
              </div>
            </div>

            <p class="d-inline-flex gap-1 ">
              <a class="btn align-items-center fw-semibold fs-4" data-bs-toggle="collapse" href="#collapseExample4"
                role="button" aria-expanded="false" aria-controls="collapseExample4">
                ما هي طرق تقديم الدعم الفني؟
                <span>
                  <i class="bi bi-caret-down-fill"></i>
                </span>
              </a>
            </p>
            <div class="collapse" id="collapseExample4">
              <div class="card card-body text-white">
                لا نتركك ابداً، فريق الدعم الفني يبدء معك بمجرد دخولك لموقعنا الاكتروني وتجربة انظمتنا ومن ثم مساعدتك
                خلال الواتس اب والبريد الالكتروني و برامج الدعم الفني التي توفر لنا الدخول لجهازك وحل مشكلتك مثل anydesk
                .
              </div>
            </div>

          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <img src="../assets/images/feet2.webp" alt="moon"
            class="img-fluid  rounded-5 animate__animated animate__slideInDown animate__slower 2s" title="moon"
            style="max-width: 100% ; height: auto; border-radius: 1.4rem;" />
        </div>
      </div>
    </div>

    <section class="container shadow-sm mt-2 mb-5">
      <ContactUs />
    </section>

  </main>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Mousewheel, Keyboard, Autoplay, Pagination } from "swiper/modules";

import AboutUs from "../components/AboutUs.vue";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import ContactUs from "../components/ContactUs.vue";
import ServiceCards from "../components/ServiceCards.vue";
import PageTitle from "../utils/PageTitle";

export default {
  components: { ContactUs, Swiper, SwiperSlide, AboutUs, ServiceCards },

  setup() {
    return {
      modules: [Navigation, Mousewheel, Keyboard, Autoplay],
    };
  },
  mounted() {
    PageTitle("الرئيسية", "Home");
  },
};


</script>

<style scoped>
form input,
select {
  height: 45px !important;
}

.progress-bar {
  width: 80%;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 75%;
  background-color: #3f5940;
  transition: width 0.5s ease-in-out;
}

#progress-fill2 {
  height: 100%;
  width: 55%;
  background-color: #3f5940;
  transition: width 0.5s ease-in-out;
}

form input:focus,
select:focus,
textarea:focus {
  background: var(--primary-100);
  border: 0.5px solid var(--accent-300);
  color: #fff;
}

.cards {
  border: 2px solid var(--accent-200);
}

form input,
select,
textarea {
  background: var(--secondary);
  border: 0.5px solid var(--accent-300);
  color: #fff;
}

form input::placeholder,
textarea::placeholder {
  color: #fff;
}

.btn-primary {
  background-color: var(--secondary) !important;
  color: #222 !important;
  border-color: var(--accent-200) !important;
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}

/* hover */
.btn-primary:hover {
  background-color: var(--accent-200) !important;
  color: #ffffff !important;
  border-color: var(--accent-300) !important;
}

.card {
  background-color: #1e1e30;
}

.card {
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s;
}

.card:hover::before {
  opacity: 1;
}

.card:hover .btn_visit {
  opacity: 1;
  transform: translateY(0);
}

.btn_visit {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s;
}

/* text-ellipsed */
.text-ellipsed {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.ABOUT {
  background: #3a3a3a;
}
</style>
