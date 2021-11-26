import cakeReducer from "./cakes/cakeReducer";
import iceReducer from "./icecream/iceReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  cake: cakeReducer,
  icecream: iceReducer,
});

export default rootReducers;
