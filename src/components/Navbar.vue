<template>
  <main>
    <header class="bg-secondary">
      <div class="container p-2">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-md-flex gap-2">
            <a href="/" target="_blank" class="d-flex gap-1">
              <i class="bi bi-whatsapp"></i>
              <span>01068299805</span>
            </a>
            <!-- email -->
            <a href="/" target="_blank" class="d-flex gap-1">
              <i class="bi bi-envelope-at"></i>
              <span>shamsan@Z4U.com</span>
            </a>
          </div>
          <div class="d-flex gap-2">
            <a href="/" target="_blank" class="d-flex gap-1">
              <i class="bi bi-info-circle"></i>
              <span>
                يمكنك تسجيل الدخول
                <span class="text-decoration-underline">
                  من هنا
                </span>
              </span>
            </a>
          </div>
          <div class="d-md-flex gap-2 align-items-center">
            <div class="d-flex gap-2 mb-2 mb-md-0">
              <a href="/" target="_blank" class="d-flex gap-1">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="/" target="_blank" class="d-flex gap-1">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="/" target="_blank" class="d-flex gap-1">
                <i class="bi bi-instagram"></i>
              </a>
            </div>
            <!-- Language Toggle -->
            <button type="button"
              class="btn bg-main text-white d-flex align-items-center rounded-pill border-1 py-1 border-white btn-sm"
              data-bs-toggle="modal" data-bs-target="#modal_language">
              <span class="rounded-sm" v-if="$i18n.locale === 'ar'">
                <img src="../assets/images/egypt.png" alt="Egypt flag" width="20" height="20" class="m-0 p-0" />
              </span>
              <span class="rounded-sm" v-else>
                <img src="../assets/images/united-states-of-america.png" alt="USA flag" width="20" height="20"
                  class="m-0 p-0" />
              </span>
              <span class="mx-1 text-light">|</span>
              <span class="text-light">
                {{ $i18n.locale === "en" ? "EN" : "عربي" }}
              </span>
            </button>

            <!-- Modal -->
            <div class="modal fade" id="modal_language" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header border-0 justify-content-between">
                    <h5 class="modal-title main-text fw-bold" id="modalTitleId">
                      اللغه
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <hr class="mt-1">
                  <div class="modal-body">
                    <div class="container-fluid d-flex flex-column">
                      <div class="d-flex justify-content-between align-items-center mb-2">
                        <label class="cursor-pointer text-dark fw-bold d-flex align-items-center gap-2">
                          <img src="../assets/images/egypt.png" alt="Egypt flag" width="20" height="20" />
                          العربية
                        </label>
                        <input type="radio" class="form-check-input mx-2 cursor-pointer" name="radio-lang" value="ar"
                          v-model="selectedLanguage" />
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <label class="cursor-pointer text-dark fw-bold d-flex align-items-center gap-2">
                          <img src="../assets/images/united-states-of-america.png" alt="USA flag" width="20"
                            height="20" />
                          English
                        </label>
                        <input type="radio" class="form-check-input mx-2 cursor-pointer" name="radio-lang" value="en"
                          v-model="selectedLanguage" />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer border-0">
                    <button type="button" class="btn btn-primary form-control fw-bold w-100" @click="toggleLanguage">
                      {{ $t("ok") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>

    <nav>
      <div class="container border-bottom pt-2 pb-3">
        <div class="align-items-center d-flex justify-content-between">
          <a href="/" :title="$t('nav.home')" :aria-label="$t('nav.home')"
            class="animate__animated animate__slideInDown animate__slower 2s">
            <img src="../assets/images/logo(0).png" width="120" class="img-fluid" :alt="$t('nav.logoAlt')"
              :title="$t('nav.logoTitle')" />
          </a>
          <div class="d-lg-flex justify-content-between d-none col-xl-8 col-lg-9">
            <ul class="list-unstyled d-flex align-items-center mb-0 fw-bold me-auto gap-3">
              <li class="nav-item dropdown">
                <RouterLink class="ms-3 cursor-pointer dropdown-toggle d-flex align-items-center gap-1" to="/"
                  aria-expanded="false" role="button" data-bs-toggle="dropdown" :title="$t('nav.home')"
                  :aria-label="$t('nav.home')">
                  {{ $t("nav.home") }}
                  <i class="bi bi-caret-down-fill"></i>
                </RouterLink>
                <ul class="dropdown-menu mt-2">
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold dropdown-item " to="/"
                      exact-active-class="text-primary">
                      الرئيسيه
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold dropdown-item d-flex justify-content-between" to="/"
                      exact>
                      <span>
                        الاسعار
                      </span>
                      <i class="bi bi-caret-left-fill"></i>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold dropdown-item " to="/" exact>
                      حسابي
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold dropdown-item " to="/" exact>
                      حسابي في الاحالات
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold dropdown-item " to="/" exact>
                      الانضمام الي شركائنا الموزعين
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold dropdown-item " to="/" exact>
                      سياسة الشركه
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold dropdown-item " to="/" exact>
                      سجل التحدثات
                    </RouterLink>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <RouterLink class="ms-3 cursor-pointer fw-semibold dropdown-toggle d-flex align-items-center gap-1"
                  to="/" aria-expanded="false" role="button" data-bs-toggle="dropdown" :title="$t('nav.home')"
                  :aria-label="$t('nav.home')">
                  برامجنا
                  <i class="bi bi-caret-down-fill"></i>
                </RouterLink>
                <ul class="dropdown-menu mt-2">
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج مبيعات سيلز اب || SalesUp
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold  py-2  dropdown-item " to="/" exact>
                      برنامج الصيانة تاتش اب || TouchUp
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold  py-2 dropdown-item  " to="/" exact>
                      برنامج صيدلية || PharmaUp
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold  py-2   dropdown-item " to="/" exact>
                      برنامج حسابات سيلز اب
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold  py-2  dropdown-item " to="/" exact>
                      برنامج محاسبة
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold  py-2 dropdown-item  " to="/" exact>
                      برنامج لايف كيو || LiveQ 
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold  py-2 dropdown-item " to="/" exact>
                      برنامج تنظيم مقابلات المدير || IntMan
                    </RouterLink>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <RouterLink class="ms-3 cursor-pointer fw-semibold dropdown-toggle d-flex align-items-center gap-1"
                  to="/" aria-expanded="false" role="button" data-bs-toggle="dropdown" :title="$t('nav.home')"
                  :aria-label="$t('nav.home')">
                  مجلات العمل
                  <i class="bi bi-caret-down-fill"></i>
                </RouterLink>
                <ul class="dropdown-menu mt-2">
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج حسابات erp 
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج الشركات التجارية
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج الشركات الصغيره
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج بيع وشراء
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج ادارة مركز صيانة 
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج فواتير مبيعات  
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج حسابات معتمد من هيئة الذكاة والدخل 
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج  ايرادات ومصروفات 
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      تحميل برنامج محاسبة عربي كامل  
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج مبيعات ومشتريات 
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج نقاط البيع Pos 
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج كاشير
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج ادارة المخازن 
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="cursor-pointer fw-semibold   py-2  dropdown-item  " to="/" exact>
                      برنامج نقاط الولاء  
                    </RouterLink>
                  </li>
                </ul>
              </li>
              <li>
                <RouterLink to="/blogs" class="ms-3 cursor-pointer " exact-active-class="text-primary"
                  :title="$t('nav.blog')" :aria-label="$t('nav.blog')">
                  {{ $t("nav.blog") }}
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact-us" class="ms-3 cursor-pointer" exact-active-class="text-primary"
                  :title="$t('nav.contactUs')" :aria-label="$t('nav.contactUs')">
                  {{ $t("nav.contactUs") }}
                </RouterLink>
              </li>
            </ul>
            <div class="d-flex align-items-center gap-2">
              <a href="/" target="_blank">
                <span>
                  سلة المشتريات / $0.00
                </span>
                <i class="bi bi-cart-plus-fill fs-3"></i>
              </a>
              <a href="">
                <i class="bi bi-person-circle fs-3"></i>
              </a>
              <a href="">
                <i class="bi bi-search fs-3"></i>
              </a>
            </div>

          </div>
          <!-- Offcanvas toggle button -->
          <button class="btn btn-primary text-white d-flex d-lg-none p-1 px-2 btn-sm" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" name="menu">
            <i class="bi bi-list fs-4"></i>
          </button>
          <!-- Offcanvas menu -->
          <div class="offcanvas offcanvas-end custom-offcanvas d-lg-none" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header border-bottom">
              <h5 class="offcanvas-title mt-0 text-light" id="offcanvasNavbarLabel">
                {{ $t("nav.menu") }}
              </h5>
              <button type="button" class="btn-close text-reset text-light" data-bs-dismiss="offcanvas"
                aria-label="Close" name="close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav fw-bold mb-2 mb-lg-0 me-auto gap-3 mt-2">
                <li>
                  <RouterLink class="ms-3 cursor-pointer text-light  fs-4" to="/" exact-active-class="text-primary"
                    :title="$t('nav.home')" :aria-label="$t('nav.home')">
                    {{ $t("nav.home") }}
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="ms-3 cursor-pointer  text-light  fs-4" to="/services"
                    exact-active-class="text-primary" :title="$t('nav.services')" :aria-label="$t('nav.services')">
                    {{ $t("nav.services") }}
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/about-us" class="ms-3 cursor-pointer  text-light fs-4"
                    exact-active-class="text-primary" :title="$t('nav.aboutUs')" :aria-label="$t('nav.aboutUs')">
                    {{ $t("nav.aboutUs") }}
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/blogs" class="ms-3 cursor-pointer  text-light fs-4" exact-active-class="text-primary"
                    :title="$t('nav.blog')" :aria-label="$t('nav.blog')">
                    {{ $t("nav.blog") }}
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/contact-us" class="ms-3 cursor-pointer   text-light  fs-4"
                    exact-active-class="text-primary" :title="$t('nav.contactUs')" :aria-label="$t('nav.contactUs')">
                    {{ $t("nav.contactUs") }}
                  </RouterLink>
                </li>
              </ul>
              <div class="d-flex align-items-center justify-content-center gap-2">
                <a href="/" target="_blank" class="text-light">
                  <span>
                    سلة المشتريات / $0.00
                  </span>
                  <i class="bi bi-cart-plus-fill fs-3"></i>
                </a>
                <a href="" class="text-light">
                  <i class="bi bi-person-circle fs-3"></i>
                </a>
                <a href="" class="text-light">
                  <i class="bi bi-search fs-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </main>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleLanguage() {
      const lang = this.$i18n.locale === "en" ? "ar" : "en";

      if (this.$i18n.locale === lang) {
        return;
      }
      window.location.reload();
      sessionStorage.clear();
      localStorage.setItem("language", lang);
    },
  },
  // when click any link in canvas close the canvas
  mounted() {
    const offcanvasElementList = [].slice.call(
      document.querySelectorAll(".offcanvas")
    );
    const offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new bootstrap.Offcanvas(offcanvasEl);
    });

    offcanvasList.forEach((offcanvas) => {
      offcanvas._element.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          offcanvas.hide();
        }
      });
    });
  },
};
</script>

<style scoped>
.custom-offcanvas {
  background-color: #1e1e30;
}

a {
  color: #222;
}
</style>
