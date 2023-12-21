import { combineReducers } from "redux";
import icecreamReducer from "./icecreams/icecreamReducer";
import cakeReducer from "./cakes/cakeReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

export default rootReducer;
