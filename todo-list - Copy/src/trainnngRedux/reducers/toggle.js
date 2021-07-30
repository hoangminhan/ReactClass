var initialState = false;
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_STATUS":
      return {
        ...state,
        status: !state,
      };

    default:
      return state;
  }
};
export default myReducer;
