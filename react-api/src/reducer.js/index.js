import { combineReducers } from "redux";
import products from "./productReducer";
import editProduct from "./editProductReducer";

const rootReducer = combineReducers({
  products,
  editProduct,
});
export default rootReducer;
