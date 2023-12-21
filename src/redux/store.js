import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
