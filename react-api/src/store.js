import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer.js";
import thunk from "redux-thunk";
import { compose } from "redux";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
