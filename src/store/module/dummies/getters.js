//plugin
import { getField } from "vuex-map-fields";

const getCount = (state) => {
  return state.count;
};

export { getCount, getField };
