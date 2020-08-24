import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import NProgress from "nprogress";
// import "../../node_modules/nprogress/nprogress.css";
// import store from "../store/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  // {
  //   path: "/new",
  //   name: "New",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "new" */ "../views/New.vue"),
  // },
  {
    path: "/product/:id",
    name: "product.detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "new" */ "../views/DetailProduct.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeResolve((to, from, next) => {
//   if (to.name) {
//     NProgress.start();
//     store.commit("LOADING_ROUTER", true);
//   }
//   next();
// });

// router.afterEach(() => {
//   NProgress.done();
//   store.commit("OFFLOADING_ROUTER", false);
// });
export default router;
