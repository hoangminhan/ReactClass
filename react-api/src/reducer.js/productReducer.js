import * as types from "./../constants/ActionType";
const initialState = [];
const products = (state = initialState, action) => {
  let newData = [...state];

  switch (action.type) {
    case types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case types.DELETE_PRODUCT:
      const newState = state.filter((product) => product.id !== action.id);
      state = [...newState];
      return state;
    case types.ADD_PRODUCT:
      debugger;
      newData.push(action.product);
      state = [...newData];
      return state;
    case types.UPDATE_PRODUCT:
      debugger;
      state.forEach((product, index) => {
        if (product.id === action.product.id) {
          state[index] = action.product;
        }
      });
      return [...state];
    default:
      return state;
  }
};
export default products;
