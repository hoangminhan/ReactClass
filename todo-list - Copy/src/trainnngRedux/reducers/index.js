// var initialState = {
//   status: true,
//   sort: {
//     by: "name",
//     value: 1,
//   },
// };
import toggle from "./toggle";
import sort from "./sort";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  toggle: toggle,
  sort: sort,
});

export default rootReducer;
