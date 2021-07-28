import { combineReducers } from "redux";
import tasks from "./taskReducer";
import taskEdit from "./editTaskReducer";

const rootReducer = combineReducers({
  tasks,
  taskEdit,
});
export default rootReducer;
