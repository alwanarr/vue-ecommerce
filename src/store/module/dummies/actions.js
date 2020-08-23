//import plugin

import Axios from "axios";

//actions
const increment = (context, payload) => {
  context.commit("INCREMENT_STATE", payload);
};

const decrement = (context, payload) => {
  context.commit("DECREMENT_STATE", payload);
};

const fecthUsers = async (context) => {
  const baseURI = "https://jsonplaceholder.typicode.com/users";
  let response = await Axios.get(baseURI);

  if (response.status == 200) context.commit("SET_USERS_STATE", response.data);
  console.log(response);
};
export { increment, decrement, fecthUsers };
