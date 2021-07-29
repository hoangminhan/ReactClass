import * as types from "./../constants/ActionType";
import callApi from "../utils/apiCall";
export const actFetchProductRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(actFetchProduct(res.data));
    });
  };
};

export const actFetchProduct = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products: products,
  };
};
export const asynDeleteProduct = (id) => {
  // delete trên server xong delete trên store
  return (dispatch) => {
    debugger;
    return callApi(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};
export const actDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};
