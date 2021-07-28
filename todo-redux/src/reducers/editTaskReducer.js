import * as types from "./../constant/actionType";
let initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      state = { ...action.task };
      return state;
    case types.RESET_EDIT_TASK:
      state = {};
      return state;
    default:
      return state;
  }
};
export default myReducer;
