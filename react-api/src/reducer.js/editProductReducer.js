import * as types from "./../constants/ActionType";
const initialState = {};
const editProduct = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCT:
      state = { ...action.product };
      return state;
    default:
      return state;
  }
};
export default editProduct;
