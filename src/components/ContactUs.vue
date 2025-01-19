<template>
  <div class="text-center mt-5 mb-2 wow bounceInUp" data-wow-duration="1.2s" data-wow-delay="0.3s">
    <div class="d-flex justify-content-center align-items-center flex-wrap">
      <h3 class="fw-bold text-secondary fs-1 ms-3 me-3">{{ $t("contactUs.heading") }}</h3>
    </div>
    <p class="fw-semibold text-black-50 fs-4 wow bounceInUp" data-wow-duration="1.4s" data-wow-delay="0.4s">
      {{ $t("contactUsText.description") }}
    </p>
  </div>
  <div class="row d-flex justify-content-between mt-4 wow bounceInUp" data-wow-duration="1.2s" data-wow-delay="0.3s">
    <div class="bg-secondary m-auto pt-3 pb-1 px-3 rounded col-lg-5 col-md-6">
      <form class="form-group" @submit.prevent="serivceServices">
        <div class="col-sm-12 mb-2">
          <input type="text" class="form-control w-100 pt-3 pb-3"
            :placeholder="$t('contactUsText.placeholders.fullName')" v-model="state.form.fullName" />
          <small v-if="v$.form.fullName.$error" class="text-light">
            {{ $t(v$.form.fullName.$errors[0].$message) }}
          </small>
        </div>
        <div class="col-sm-12 mb-2">
          <input type="email" class="form-control pt-3 pb-3" :placeholder="$t('contactUsText.placeholders.email')"
            v-model="state.form.email" />
          <small v-if="v$.form.email.$error" class="text-light">
            {{ $t(v$.form.email.$errors[0].$message) }}
          </small>
        </div>
        <div class="col-sm-12 mb-2">
          <input type="number" class="form-control w-100 pt-3 pb-3"
            :placeholder="$t('contactUsText.placeholders.phone')" v-model="state.form.phone" />
          <small v-if="v$.form.phone.$error" class="text-light">
            {{ $t(v$.form.phone.$errors[0].$message) }}
          </small>
        </div>

        <!-- Select -->
        <n-select v-model:value="selectedValue" filterable :placeholder="$t('contactUsText.placeholders.service')"
          :options="localizedOptions" clearable size="large" @change="storeAccountType"
          :consistent-menu-width="false" />
        <small v-if="v$.form.service.$error" class="text-light">
          {{ $t(v$.form.service.$errors[0].$message) }}
        </small>

        <div class="col-sm-12 mt-2">
          <textarea :placeholder="$t('contactUsText.placeholders.message')" class="form-control p-2" rows="5"
            v-model="state.form.message"></textarea>
          <small v-if="v$.form.message.$error" class="text-light">
            {{ $t(v$.form.message.$errors[0].$message) }}
          </small>
        </div>

        <div class="mt-3 mb-2 d-flex m-auto justify-content-center">
          <button
            class="btn btn-primary btn-sm px-5 m-auto d-flex wow bounceInUp d-flex align-items-center gap-1 py-2 rounded"
            type="submit" :disabled="isLoadingSend">
            <div class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="isLoadingSend"></div>
            <i class="bi bi-send" v-else></i>
            {{ $t("contactUsText.sendButton") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { NSelect } from "naive-ui";
import { reactive, computed } from "vue"; // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import toastMsg from "../utils/toastMsg";
import { mapActions } from "vuex";

export default {
  name: "ContactUs",
  data() {
    return {
      selectedValue: null,
      options: [

        {
          value: "customTailoring",
          label: { "en": "Custom Tailoring", "ar": "تفصيل حسب الطلب" }
        },
        {
          value: "formalWear",
          label: { "en": "Formal Wear", "ar": "الملابس الرسمية" }
        },
        {
          value: "casualWear",
          label: { "en": "Casual Wear", "ar": "الملابس الكاجوال" }
        },
        {
          value: "traditionalClothing",
          label: { "en": "Traditional Clothing", "ar": "الملابس التقليدية" }
        },
        {
          value: "fabricSales",
          label: { "en": "Fabric Sales", "ar": "بيع الأقمشة" }
        },
        {
          value: "clothingRepair",
          label: { "en": "Clothing Repair", "ar": "إصلاح الملابس" }
        },
      ],
      isLoadingSend: false,
    };
  },
  computed: {
    localizedOptions() {
      return this.options.map((option) => ({
        value: option.value,
        label: option.label[this.$i18n.locale],
      }));
    },
  },
  methods: {
    ...mapActions({
      addData: "home/addData",
    }),
    storeAccountType(value) {
      this.selectedValue = value;
      this.state.form.service = value;
    },
    async serivceServices() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.isLoadingSend = true;
        // dispatch action to update data
        await this.addData(this.state.form);
        this.isLoadingSend = false;
        toastMsg.successToast(this.$t("successMessage"));
        // reset form
        this.state.form = {
          fullName: "",
          phone: "",
          service: "",
          email: "",
          message: "",
          createdAt: new Date().toLocaleString(),
        };

        // reset select
        this.selectedValue = null;

        // reset validation
        this.v$.$reset();
      }
    },
  },
  setup() {
    const state = reactive({
      form: {
        fullName: "",
        phone: "",
        service: "",
        email: "",
        message: "",
        createdAt: new Date().toLocaleString(),
      },
    });
    const rules = computed(() => {
      return {
        form: {
          fullName: { required: required, minLength: minLength(2) },
          service: { required: required },
          phone: {
            required: required,
            numeric: true,
          },
          email: { required: required, email: email },
          message: { required: required, minLength: minLength(10) },
        },
      };
    });

    const v$ = useVuelidate(rules, state);

    return { rules, state, v$ };
  },
  components: {
    NSelect,
  },
};
</script>

<style scoped>

background: red;
form input,
select {
  height: 45px !important;
}

form input:focus,
select:focus,
textarea:focus {
  background: var(--text-900);
  border: 0.5px solid var(--accent-200);
  color: #fff !important;
}


.cards {
  border: 2px solid var(--accent-200);
}

form input,
select,
textarea {
  background: #fff;
  border: 0.5px solid var(--accent-200);
  color: #fff !important;
}

form input::placeholder,
textarea::placeholder {
  color: #222;
}

.btn-primary {
  background-color: var(--accent-200) !important;
  color: #ffffff !important;
  border-color: var(--text-800) !important;
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}
</style>
