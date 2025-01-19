import axios from "axios";
import store from "../Store";
import Cookies from "js-cookie";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// Function to set access token and refresh token
const setTokens = (accessToken, refreshToken) => {
  store.commit("auth/SET_ACCESS_TOKEN", accessToken);
  store.commit("auth/SET_REFRESH_TOKEN", refreshToken);
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  Cookies.set("accessToken", accessToken, {
    expires: 365,
    secure: true,
  });
  Cookies.set("refreshToken", refreshToken, {
    expires: 365,
    secure: true,
  });
};

// Function to handle user authentication state change
const handleAuthStateChange = () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const accessToken = await user.getIdToken();
        const refreshToken = user.refreshToken;
        setTokens(accessToken, refreshToken);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    } else {
      // Clear tokens and user data when user signs out
      store.commit("auth/SET_ACCESS_TOKEN", null);
      store.commit("auth/SET_REFRESH_TOKEN", null);
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      store.commit("auth/SET_USER", null);
    }
  });
};

// Subscribe to auth state changes
handleAuthStateChange();

// Axios request interceptor
axios.interceptors.request.use(async (config) => {
  const accessToken = Cookies.get("accessToken");

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

// Axios response interceptor
axios.interceptors.response.use(
  (response) => {
    // Handle response data as needed
    return response;
  },
  (error) => {
    // Handle error responses
    return Promise.reject(error);
  }
);
