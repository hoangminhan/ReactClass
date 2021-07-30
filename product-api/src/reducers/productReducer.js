import * as types from "../constants//ActionTypes";
const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      state = [...action.products];
      return state;
    case types.DELETE_PRODUCT:
      const data = state.filter((product, index) => {
        return product.id !== action.id;
      });
      state = data;
      return state;
    case types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];
    case types.UPDATE_PRODUCT:
      const newState = [...state];
      newState.forEach((product, index) => {
        if (product.id === action.id) {
          newState[index] = action;
        }
      });
      state = [...newState];
      return state;
    default:
      return state;
  }
};
export default products;
