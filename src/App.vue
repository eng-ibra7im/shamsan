<template>
  <NConfigProvider :theme-overrides="customTheme">
    <main>
      <Navbar />
      <div class="min-vh-80">
        <RouterView />
      </div>
      <ProgressBar />
      <BtnTools />
      <Footer />
    </main>
  </NConfigProvider>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { NConfigProvider } from "naive-ui";
import customTheme from "./theme";
import BtnTools from "./components/BtnTools.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  components: { Navbar, Footer, NConfigProvider, BtnTools, ProgressBar },
  name: "App",
  data() {
    return {
      customTheme,
    };
  },
};
</script>

<style>
.min-vh-80 {
  min-height: 80vh;
}
</style>
