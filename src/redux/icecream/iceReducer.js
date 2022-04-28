import { BUY_ICECREAM } from "./iceTypes";

const initialState = {
  iceCreams: 30,
};

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      const amount = state.iceCreams - action.payload;
      return {
        ...state,
        iceCreams: amount,
      };
    default:
      return state;
  }
};

export default iceReducer;
