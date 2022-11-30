import types from "./types";

export const increaseCounter = () => ({
  type: types.INCREASE_COUNTER
})
export const decreaseCounter = () => ({
  type: types.DECREASE_COUNTER
})