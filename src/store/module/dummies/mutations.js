//import plugin
import { updateField } from "vuex-map-fields";
//actions
const INCREMENT_STATE = (state, payload) => {
  state.count += payload;
};

const DECREMENT_STATE = (state, payload) => {
  state.count -= payload;
};

const SET_USERS_STATE = (state, payload) => {
  console.log(state);
  console.log(payload);
};
export { INCREMENT_STATE, DECREMENT_STATE, SET_USERS_STATE, updateField };
