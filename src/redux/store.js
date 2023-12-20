import { legacy_createStore, applyMiddleware } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = legacy_createStore(
  cakeReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
