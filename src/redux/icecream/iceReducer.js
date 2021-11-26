import { BUY_ICECREAM } from "./iceTypes";

const initialState = {
  iceCreams: 30,
};

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        iceCreams: state.iceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceReducer;
