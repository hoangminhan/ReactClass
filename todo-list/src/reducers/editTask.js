import * as types from "../constants/ActionTypes";
var initialState = {
  task: {},
  isEditting: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      if (!action.task) {
        return {
          task: {},
          isEditting: false,
        };
      } else {
        debugger;
        const newTask = { ...action.task };
        return {
          task: newTask,
          isEditting: true,
        };
      }
    default:
      return state;
  }
};
export default myReducer;
