import { BUY_CAKE } from "./cakeTypes";

const buyCake = (amount = 1) => {
  return {
    type: BUY_CAKE,
    payload: amount,
  };
};

export { buyCake };
