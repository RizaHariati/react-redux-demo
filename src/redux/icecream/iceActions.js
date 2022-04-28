import { BUY_ICECREAM } from "./iceTypes";

export const buyIceCream = (amount = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: amount,
  };
};
