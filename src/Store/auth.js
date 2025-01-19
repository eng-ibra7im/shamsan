import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Cookies from "js-cookie";
import toastMsg from "../utils/toastMsg";
import i18n from "../i18n";
import router from "../router";

export default {
  namespaced: true,
  state: {
    accessToken: null,
    refreshToken: null,
    user: null,
  },
  getters: {
    authenticated(state) {
      return !!state.accessToken && !!state.user;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_ACCESS_TOKEN(state, token) {
      state.accessToken = token;
      Cookies.set("accessToken", token, {
        expires: 365,
      });
    },
    SET_REFRESH_TOKEN(state, token) {
      state.refreshToken = token;
      Cookies.set("refreshToken", token, {
        expires: 365,
      });
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async signIn({ commit, dispatch }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const accessToken = await user.getIdToken();
        const refreshToken = user.refreshToken;

        commit("SET_ACCESS_TOKEN", accessToken);
        commit("SET_REFRESH_TOKEN", refreshToken);
        commit("SET_USER", user);

        const successMsg =
          i18n.locale === "en"
            ? "Signed in successfully"
            : "تم تسجيل الدخول بنجاح";
        toastMsg.successToast(successMsg);
        router.push("/Dashboard"); // Redirect to home page
        dispatch("attempt", { accessToken, refreshToken }); // Call attempt to set user and tokens
      } catch (error) {
        toastMsg.errorToast(
          i18n.locale === "en"
            ? "Invalid email or password"
            : "البريد الإلكتروني أو كلمة المرور غير صحيحة"
        );
        console.error("Error signing in:", error);
      }
    },
    async attempt({ commit, state }, { accessToken, refreshToken }) {
      if (accessToken) {
        commit("SET_ACCESS_TOKEN", accessToken);
        commit("SET_REFRESH_TOKEN", refreshToken);
      }

      if (!state.accessToken) {
        return;
      }

      try {
        const user = auth.currentUser;
        if (user) {
          commit("SET_USER", user);
        } else {
          const notAuthenticated =
            i18n.locale === "en"
              ? "User not authenticated"
              : "يرجى تسجيل الدخول أولاً";
          throw new Error(notAuthenticated);
        }
      } catch (error) {
        commit("SET_ACCESS_TOKEN", null);
        commit("SET_REFRESH_TOKEN", null);
        commit("SET_USER", null);
      }
    },
    async signOut({ commit }) {
      try {
        await signOut(auth);
        commit("SET_ACCESS_TOKEN", null);
        commit("SET_REFRESH_TOKEN", null);
        Cookies.remove("accessToken"); // Remove tokens from cookies
        Cookies.remove("refreshToken");
        commit("SET_USER", null);
        const successMsg =
          i18n.locale === "en"
            ? "Signed out successfully"
            : "تم تسجيل الخروج بنجاح";
        toastMsg.successToast(successMsg);
      } catch (error) {
        toastMsg.errorToast(error.message);
        console.error("Error signing out:", error);
      }
    },
  },
};
