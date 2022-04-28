import cakeReducer from "./cakes/cakeReducer";
import iceReducer from "./icecream/iceReducer";
import userReducers from "./users/usersReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  cake: cakeReducer,
  icecream: iceReducer,
  users: userReducers,
});

export default rootReducers;
