import rootReducer from "../Reducers/reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk))
);

export default store;
