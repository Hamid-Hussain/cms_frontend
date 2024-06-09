import { defineStore } from "pinia";
import statesData from "./states.js";
import gettersData from "./getters.js";
import actionsData from "./actions.js";

export const useAuthStore = defineStore("auth", {
  state: statesData,
  getters: gettersData,
  actions: actionsData,
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRootStore, import.meta.hot));
}
