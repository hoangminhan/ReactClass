import * as types from "../constants/ActionTypes";
const initialState = {};

const productEdit = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCT:
      return action.product;
    default:
      return state;
  }
};
export default productEdit;
