import { authRoutes } from "~/constants/routes";

export default {
  async register(payload) {
    try {
      const { data } = await useNuxtApp().$axios.post(
        authRoutes.register,
        payload
      );
    } catch (error) {
      console.log("error => ", error);
    }
  },

  async login(payload) {
    try {
      const { data } = await useNuxtApp().$axios.post(
        authRoutes.login,
        payload
      );
      localStorage.setItem("auth-token", data.token);
      this.$patch({
        user: data.user,
      });
      navigateTo("/");
    } catch (error) {
      console.log("error => ", error);
    }
  },

  async logout() {
    try {
      localStorage.clear();
      this.$patch({
        user: {},
      });
      navigateTo("/");
    } catch (error) {
      console.log("error => ", error);
    }
  },
};
