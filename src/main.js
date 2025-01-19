import './assets/style.css'

import { createApp } from 'vue'

import App from './App.vue'

// !Router
import router from "./router";

// !Language
import i18n from "./i18n/index";
import en from "./i18n/locales/en.json";
import ar from "./i18n/locales/ar.json";

// !store
import index from "./Store/index";

// !Vuex
import Vuex from "vuex";

// !Subscribe
import "./Store/subscriber";

// !Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// !Toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// ! Toast Options
import options from "./utils/toastOptions";

// !Language File -> Loaded && !Default Language
import "./utils/LangMounted";

// !WOW.js for animations
import WOW from "wow.js";
import "wow.js/css/libs/animate.css";

// !animate.css
import "animate.css";

// !Language
export default {
    en,
    ar,
};

// !js-cookie
import Cookies from "js-cookie";

index.dispatch("home/fetchData").then(() => {
    index
        .dispatch("auth/attempt", {
            accessToken: Cookies.get("accessToken"),
            refreshToken: Cookies.get("refreshToken"),
        })
        .then(() => {
            const app = createApp(App);
            app.use(router);
            app.use(index);
            app.use(Toast, options);
            app.use(Vuex);
            app.use(i18n);
            app.mount("#app");


            // Initialize wow.js for animations
            new WOW().init();

            // Hide the preloader once the app is ready
            const preloader = document.querySelector(".preloader");
            if (preloader) {
                preloader.classList.add("d-none");
            }
        });
});
