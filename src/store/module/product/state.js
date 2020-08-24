let cart = window.localStorage.getItem("cart");
let cartCount = window.localStorage.getItem("cartCount");
const state = {
  allProducts: [],
  bestSellers: [],
  product: [],
  cart: cart ? JSON.parse(cart) : [],
  cartCount: cartCount ? parseInt(cartCount) : 0
};

export { state };
