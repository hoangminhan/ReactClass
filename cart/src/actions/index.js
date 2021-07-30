import * as types from "../constants/ActionType";

export const buyProduct = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};
export const changeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message,
  };
};
export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};
export const handleDeleteOneCart = (id) => {
  return {
    type: types.DELETE_ONE_CART,
    id,
  };
};
export const handleAddOneCart = (id) => {
  return {
    type: types.ADD_ONE_CART,
    id,
  };
};
