import { createStore } from "redux";
import { toggle, sort } from "./actions/index";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer);

console.log("def", store.getState());

store.dispatch(toggle());

console.log("toggle", store.getState());

store.dispatch(sort({ by: "name", value: -1 }));

console.log("sort", store.getState());
