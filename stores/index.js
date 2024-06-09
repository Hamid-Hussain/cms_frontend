import { defineStore } from "pinia";
import statesData from "./states.js";
import gettersData from "./getters.js";
import actionsData from "./actions.js";

export const useRootStore = defineStore("root", {
  state: statesData,
  getters: gettersData,
  actions: actionsData,
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRootStore, import.meta.hot));
}
