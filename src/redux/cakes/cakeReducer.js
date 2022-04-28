import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  cakes: 20,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      const amount = state.cakes - action.payload;
      return {
        ...state,
        cakes: amount,
      };
    default:
      return state;
  }
};

export default cakeReducer;
