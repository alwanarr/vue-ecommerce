import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import product from "./module/product/index.js";
export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    LOADING_ROUTER(state, payload) {
      state.isLoading = payload;
    },
    OFFLOADING_ROUTER(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {},
  modules: {
    product,
  },
});
