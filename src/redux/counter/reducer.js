import types from "./types";
import { initArgs } from "./state";


const counterReducer = (state = initArgs, action) => {
  switch (action.type) {
    case types.INCREASE_COUNTER:
      return state + 1;
    case types.DECREASE_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;