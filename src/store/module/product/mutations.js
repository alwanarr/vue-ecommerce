//import plugin
import Vue from "vue";

const SET_PRODUCTS = (state, payload) => {
  //getBestSeller product
  let bestSellers = payload.filter((product) => product.bestSeller);

  //get product
  let products = payload.filter((product) => product.bestSeller == false);

  //insert into store vuex
  state.allProducts = payload;
  state.bestSellers = bestSellers;
  state.product = products;
};

const ADD_TO_CART = (state, payload) => {
  let found = state.cart.find((product) => product.id == payload.id);
  if (found) {
    found.quantity++;
    found.totalPrice = found.price * found.quantity;
  } else {
    state.cart.push(payload);

    //modifikasi payload object
    Vue.set(payload, "quantity", 1);
    Vue.set(payload, "totalPrice", payload.price);
    state.cartCount = state.cart.length;
  }
  SAVE_CART(state);
};

const REMOVE_CART = (state, payload) => {
  //get index array from cart state
  let index = state.cart.findIndex((cart) => cart.id == payload);

  state.cart.splice(index, 1);
  state.cartCount = state.cart.length;
  SAVE_CART(state);
};
const SAVE_CART = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state.cart));
  window.localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
};
export { SET_PRODUCTS, ADD_TO_CART, REMOVE_CART, SAVE_CART };
