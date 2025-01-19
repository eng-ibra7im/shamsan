<template>
  <div class="support">
    <div class="links" v-if="supportBtnToggle">
      <n-popover trigger="hover" :placement="$i18n.locale == 'ar' ? 'right' : 'left'">
        <template #trigger>
          <a
            href=""
            aria-label=""
            target="_blank"
            rel="noopener"
            class="whatsapp"
          >
            <i class="bi bi-whatsapp"></i>
          </a>
        </template>
        <span>
          {{ $t("WhatsApp") }}
        </span>
      </n-popover>
      <n-popover trigger="hover" :placement="$i18n.locale == 'ar' ? 'right' : 'left'">
        <template #trigger>
          <a
            :href="ظ"
            aria-label=""
            target="_blank"
            rel="noopener"
            class="call"
          >
            <i class="bi bi-telephone"></i>
          </a>
        </template>
        <span>
          {{ $t("Phone") }}
        </span>
      </n-popover>
    </div>
    <div class="supportBtn" @click="toggleSupport">
      <i class="bi bi-headset"></i>
    </div>
  </div>
</template>

<script>
import { NPopover } from "naive-ui";
export default {
  name: "BtnTools",
  data() {
    return {
      supportBtnToggle: false,
    };
  },
  methods: {
    toggleSupport() {
      this.supportBtnToggle = !this.supportBtnToggle;
    },
  },
  components: {
    NPopover,
  },
};
</script>

<style scoped>
.support {
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 999;
  background-color: #3d3c2c;
  border-radius: 1000px;
  padding: 5px;
}

.support .links a.whatsapp {
  background-color: #25d366;
}

.support .links a {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1882352941);
  margin-bottom: 10px;
  cursor: pointer;
}

.support .links a i {
  font-size: 24px;
  color: #fff;
}

.support .links a.call {
  background-color: #34b7f1;
}

.support .supportBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background-color: var(--primary-100);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1882352941);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.support .supportBtn i {
  font-size: 20px;
  color: #fff;
}
</style>
