import products from "../reducers/productReducer";
import callApi from "../utils/callApi";
import * as types from "./../constants/ActionTypes";

export const asyncProduct = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(actFetchProduct(res.data));
    });
  };
};
export const actFetchProduct = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};
export const asyncDeleteProduct = (id) => {
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
export const asyncEditProduct = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`, "GET", null).then((res) => {
      dispatch(actEditProduct(product));
    });
  };
};
export const actEditProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product,
  };
};

export const actUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};
export const asyncUpdateProduct = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`, "PUT", product).then((res) => {
      dispatch(actUpdateProduct(product));
    });
  };
};

export const asyncAddProduct = (product) => {
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
