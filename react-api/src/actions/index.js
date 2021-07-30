import * as types from "./../constants/ActionType";
import callApi from "../utils/apiCall";
import products from "../reducer.js/productReducer";
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
export const asynAddProduct = (product) => {
  return (dispatch) => {
    return callApi("products", "POST", product).then((res) => {
      dispatch(actAddProduct(res.data));
    });
  };
};
export const actAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product,
  };
};
export const asynUpdateProduct = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`, "PUT", product).then((res) => {
      dispatch(actUpdateProduct(res.data));
    });
  };
};
export const actUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};
export const asynEditProduct = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "GET", null).then((res) => {
      dispatch(actEditProduct(res.data));
    });
  };
};
export const actEditProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product,
  };
};
