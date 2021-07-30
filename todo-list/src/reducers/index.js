import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import taskEdtting from "./editTask";
const rootReducer = combineReducers({
  tasks,
  isDisplayForm,
  taskEdtting,
});
export default rootReducer;
