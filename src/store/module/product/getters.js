//plugin
const getBestSellers = (state) => {
  return state.bestSellers;
};
const getProducts = (state) => {
  return state.product;
};
const getAllProducts = (state) => {
  return state.allProducts;
};
const getCart = (state) => {
  return state.cart;
};
const getCartCount = (state) => {
  return state.cartCount;
};
export { getBestSellers, getProducts, getAllProducts, getCart, getCartCount };
