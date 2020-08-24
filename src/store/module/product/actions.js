//import plugin

import axios from "axios";
// axios.create({
//   baseURL: "http://localhost:3000",
// });

const getProducts = async context => {
  try {
    let response = await axios.get("http://localhost:3000/products");
    context.commit("SET_PRODUCTS", response.data);
    return response;
  } catch (e) {
    console.log(e);
  }
};
const addToCart = (context, payload) => {
  context.commit("ADD_TO_CART", payload);
};
const removeCart = (context, payload) => {
  context.commit("REMOVE_CART", payload);
};
export { getProducts, addToCart, removeCart };
