var initialState = {
  by: "name",
  value: 1,
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        by: action.sort.by,
        value: action.sort.value,
      };

    default:
      return state;
  }
};
export default myReducer;