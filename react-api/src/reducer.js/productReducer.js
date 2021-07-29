import * as types from "./../constants/ActionType";
const initialState = [];
const products = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case types.DELETE_PRODUCT:
      const newState = state.filter((product) => product.id !== action.id);
      state = [...newState];
      return state;

    default:
      return state;
  }
};
export default products;
