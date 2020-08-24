import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "../src/plugins/vuetify.js";
Vue.config.productionTip = false;

const app = new Vue({
  data() {
    return {
      loading: false
    };
  },
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeResolve((to, from, next) => {
  if (to.name) {
    app.loading = true;
  }
  next();
});

router.afterEach(() => {
  setTimeout(() => (app.loading = false), 1500);
});
